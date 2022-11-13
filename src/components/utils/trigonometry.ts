const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) => {
  'worklet';

  const { PI, cos, sin } = Math;

  let angleInRadians = ((angleInDegrees - 90) * PI) / 180;

  return {
    x: centerX + radius * cos(angleInRadians),
    y: centerY + radius * sin(angleInRadians),
  };
};

export const describeArc = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) => {
  'worklet';

  let start = polarToCartesian(x, y, radius, endAngle);
  let end = polarToCartesian(x, y, radius, startAngle);
  let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
};
