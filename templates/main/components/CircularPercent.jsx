import { number } from 'prop-types';
import styled from 'styled-components';

const CircleBackground = styled.circle`
  fill: none;
  stroke: var(--grey-lighter);
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: var(--primary);
  stroke-linecap: square;
  stroke-linejoin: square;
`;

const CircleText = styled.text`
  font-size: ${props => props.sqSize / 5}px;
  font-weight: var(--bold);
  fill: var(--primary);
`;

const CircularProgressBar = props => {
  const { sqSize, strokeWidth, percentage } = props;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  const circleProps = {
    cx: sqSize / 2,
    cy: sqSize / 2,
    r: radius,
    strokeWidth: `${strokeWidth}px`,
  };

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <CircleBackground {...circleProps} />
      <CircleProgress
        {...circleProps}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <CircleText x="50%" y="50%" dy=".3em" textAnchor="middle" sqSize={sqSize}>
        {`${percentage}%`}
      </CircleText>
    </svg>
  );
};

CircularProgressBar.propTypes = {
  sqSize: number,
  percentage: number,
  strokeWidth: number,
};

export default CircularProgressBar;
