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
