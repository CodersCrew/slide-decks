import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url('${props => props.background}') no-repeat center/cover;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: #0f2027;
    background: linear-gradient(to right, #203a43, #2c5364, #0f2027);
    opacity: 0.5;
  }
`;

const Text = styled.h1`
  max-width: 80%;
  color: var(--white);
  text-shadow: 1px 2px 8px rgba(41, 41, 41, 0.25);
`;

const BigQuestion = props => (
  <Container background={props.background}>
    <Text>{props.title}</Text>
  </Container>
);

export default BigQuestion;
