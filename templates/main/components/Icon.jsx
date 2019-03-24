import React from 'react';
import { string, oneOfType, number } from 'prop-types';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import classnames from 'classnames';

const getMeasure = num => (typeof num === 'number' ? `${num}px` : num);

const StyledSVG = styled(SVG)`
  min-width: ${props => getMeasure(props.width)};
  min-height: ${props => getMeasure(props.height)};

  svg {
    fill: ${props => props.fill};
    width: ${props => getMeasure(props.width)};
    height: ${props => getMeasure(props.height)};
  }
`;

const Icon = props => {
  return <StyledSVG {...props} className={classnames('icon', props.className)} />;
};

Icon.propTypes = {
  className: string,
  fill: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  src: string.isRequired,
};

export default Icon;
