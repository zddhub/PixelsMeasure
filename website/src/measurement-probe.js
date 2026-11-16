// Intersect a scan line with a rounded rectangle. Transpose the axes
// for a vertical scan so both directions use the same corner geometry.
function scanSpan(coordinate, crossStart, crossSize, start, size, radius) {
  const depth = Math.min(coordinate - crossStart, crossStart + crossSize - coordinate);
  if (depth < 0) return null;

  const cornerOffset = Math.max(0, radius - depth);
  const inset = radius - Math.sqrt(radius ** 2 - cornerOffset ** 2);
  return [start + inset, start + size - inset];
}

export function probeAt({x, y}, shapes, border) {
  let left = border.x;
  let right = border.x + border.width;
  let top = border.y;
  let bottom = border.y + border.height;

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
