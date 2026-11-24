// Intersect a scan line with a rounded rectangle. Transpose the axes
// for a vertical scan so both directions use the same corner geometry.
function scanSpan(coordinate, crossStart, crossSize, start, size, radius = 0) {
  const depth = Math.min(coordinate - crossStart, crossStart + crossSize - coordinate);
  if (depth < 0) return null;

  const cornerOffset = Math.max(0, radius - depth);
  const inset = radius - Math.sqrt(radius ** 2 - cornerOffset ** 2);
  return [start + inset, start + size - inset];
}

export function roundedBoundsAt({x, y}, shape) {
  const horizontal = scanSpan(y, shape.y, shape.height, shape.x, shape.width, shape.radius);
  if (!horizontal || x < horizontal[0] || x > horizontal[1]) return null;

  const [left, right] = horizontal;
  const [top, bottom] = scanSpan(x, shape.x, shape.width, shape.y, shape.height, shape.radius);
  return {left, right, top, bottom};
}

export function probeAt(point, shapes, border) {
  const bounds = roundedBoundsAt(point, border);
  if (!bounds) return null;

  const {x, y} = point;
  let {left, right, top, bottom} = bounds;

  for (const shape of shapes) {
    const horizontal = scanSpan(y, shape.y, shape.height, shape.x, shape.width, shape.radius);
    if (horizontal) {
      const [start, end] = horizontal;
      if (end <= x) left = Math.max(left, end);
      if (start >= x) right = Math.min(right, start);
    }

    const vertical = scanSpan(x, shape.x, shape.width, shape.y, shape.height, shape.radius);
    if (vertical) {
      const [start, end] = vertical;
      if (end <= y) top = Math.max(top, end);
      if (start >= y) bottom = Math.min(bottom, start);
    }
  }

  return {left, right, top, bottom};
}

export function formatLabel({left, right, top, bottom}, axis) {
  const width = Math.round(right - left);
  const height = Math.round(bottom - top);
  if (axis === 'horizontal') return `${width} px`;
  if (axis === 'vertical') return `${height} px`;
  return `${width} × ${height} px`;
}

// Look only between the pointer and the geometric endpoint. A blocked ray
// has a visible end but no measurement tick.
function clipRay(mask, x, y, end, horizontal) {
  if (!mask) return {end, blocked: false};

  const {data, width, height, top, scale} = mask;
  const along = horizontal ? x : y - top;
  const across = Math.floor((horizontal ? y - top : x) * scale);
  const limit = horizontal ? width : height;
  if (across < 0 || across >= (horizontal ? height : width)) return {end, blocked: false};

  const origin = Math.floor(along * scale);
  const offset = horizontal ? 0 : top;
  const target = (end - offset) * scale;
  const direction = end >= along + offset ? 1 : -1;
  const last = direction > 0 ? Math.ceil(target) - 1 : Math.floor(target);
  for (let index = origin; direction * (last - index) >= 0; index += direction) {
    if (index < 0 || index >= limit) continue;
    const pixel = horizontal ? across * width + index : index * width + across;
    if (data[pixel * 4 + 3] < 64) continue;

    const stop = index === origin ? along + offset : (index + (direction < 0 ? 1 : 0)) / scale + offset;
    return {end: stop, blocked: true};
  }
  return {end, blocked: false};
}

export function visibleProbe(point, edges, axis, mask) {
  const {x, y} = point;
  let lines = "";
  let horizontal = false;
  let vertical = false;

  if (axis !== "vertical") {
    const left = clipRay(mask, x, y, edges.left, true);
    const right = clipRay(mask, x, y, edges.right, true);
    if (right.end > left.end) lines += `M${left.end} ${y}H${right.end}`;
    if (!left.blocked) lines += `M${left.end} ${y - 8}v16`;
    if (!right.blocked) lines += `M${right.end} ${y - 8}v16`;
    horizontal = !left.blocked && !right.blocked;
  }
  if (axis !== "horizontal") {
    const top = clipRay(mask, x, y, edges.top, false);
    const bottom = clipRay(mask, x, y, edges.bottom, false);
    if (bottom.end > top.end) lines += `M${x} ${top.end}V${bottom.end}`;
    if (!top.blocked) lines += `M${x - 8} ${top.end}h16`;
    if (!bottom.blocked) lines += `M${x - 8} ${bottom.end}h16`;
    vertical = !top.blocked && !bottom.blocked;
  }

  const measuredAxis = horizontal && vertical ? "both" : horizontal ? "horizontal" : "vertical";
  return {lines, label: horizontal || vertical ? formatLabel(edges, measuredAxis) : ""};
}
