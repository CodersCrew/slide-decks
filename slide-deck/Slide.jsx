import { Component } from 'react';
import { exact, oneOf, string, number, objectOf, bool, object, func } from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ease-out 2000ms;  
  background-color: var(--slide-background);

  > div {
    width: 100%;
    height: 100%;
  }
`;

const Slide = props => {
  const { type, animation, template, data } = props;
  const animationType = animation && animation.type;
  const animationDiretions = animation && animation.direction;
  const className = classnames(
    `slide-${type}`,
    { animated: !!animation },
    { [`animation-${animationType}`]: animationType },
    { [`direction-${animationDiretions}`]: animationDiretions },
  );
  const Component = template[data.template];

  return (
    <Container type={type} className={className}>
      <Component {...data.content} />
    </Container>
  );
};

Slide.propTypes = {
  animation: exact({
    direction: oneOf(['next', 'prev']).isRequired,
    type: oneOf(['horizontal', 'vertical']).isRequired,
  }),
  data: exact({
    animation: exact({
      type: string.isRequired,
    }),
    content: object.isRequired,
    key: number.isRequired,
    template: string.isRequired,
  }),
  template: objectOf(func).isRequired,
  type: oneOf(['prev', 'curr', 'next']).isRequired,
  visible: bool.isRequired,
};

export default Slide;
