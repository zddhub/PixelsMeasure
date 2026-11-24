// Sample glyph coverage in artwork coordinates, independently of the probe overlay.
export function buildTextMask(svgLabels, htmlLabels, bounds, toArtwork, labelScale) {
  const scale = 2;
  const top = Math.floor(bounds.y);
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(bounds.width * scale);
  canvas.height = Math.ceil((bounds.y + bounds.height - top) * scale);
  const context = canvas.getContext("2d");
  if (!context || !canvas.width || !canvas.height) return null;

  context.setTransform(scale, 0, 0, scale, 0, -top * scale);
  for (const {group, x, y} of svgLabels) {
    for (const text of group.querySelectorAll("text")) {
      if (!text.getNumberOfChars()) continue;
      setTextStyle(context, getComputedStyle(text));
      const origin = text.getStartPositionOfChar(0);
      context.fillText(text.textContent, x + origin.x, y + origin.y);
    }
  }

  for (const node of htmlLabels) {
    const style = getComputedStyle(node);
    setTextStyle(context, style);
    for (const {content, rect} of textLines(node)) {
      const metrics = context.measureText(content);
      const baseline = (rect.top + rect.bottom + metrics.fontBoundingBoxAscent - metrics.fontBoundingBoxDescent) / 2;
      if (!Number.isFinite(baseline)) continue;
      const origin = new DOMPoint(rect.left, baseline).matrixTransform(toArtwork);
      context.save();
      context.translate(origin.x, origin.y);
      context.scale(labelScale, labelScale);
      context.fillText(content, 0, 0);
      context.restore();
    }
  }

  const {width, height} = canvas;
  const {data} = context.getImageData(0, 0, width, height);
  return Object.freeze({data, width, height, top, scale});
}

function setTextStyle(context, style) {
  context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  if ("letterSpacing" in context) {
    context.letterSpacing = style.letterSpacing === "normal" ? "0px" : style.letterSpacing;
  }
}

function textLines(element) {
  const range = document.createRange();
  const lines = [];
  for (const node of element.childNodes) {
    if (node.nodeType !== Node.TEXT_NODE || !node.textContent.trim()) continue;
    range.selectNodeContents(node);
    const rects = Array.from(range.getClientRects()).filter(rect => rect.width > 0);
    if (rects.length === 1) {
      lines.push({content: node.textContent.trim(), rect: rects[0]});
      continue;
    }

    // Preserve the actual browser line breaks, including scripts without spaces.
    const runs = new Map();
    let offset = 0;
    for (const character of node.textContent) {
      range.setStart(node, offset);
      offset += character.length;
      range.setEnd(node, offset);
      const rect = range.getBoundingClientRect();
      if (!rect.width) continue;
      const line = runs.get(rect.top);
      if (line) line.content += character;
      else runs.set(rect.top, {content: character, rect});
    }
    lines.push(...runs.values());
  }
  return lines;
}
