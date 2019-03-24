import styled from 'styled-components';
import { node, oneOf } from 'prop-types';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;

  > h1 {
    text-align: ${props => props.align};
  }
`;

const Underline = styled.div`
  width: 80%;
  height: 8px;
  margin: 24px 0;
  background-color: var(--primary);
  border-radius: 2px;
`;

const LineHeader = ({ align, children }) => (
  <Container align={align} className="line-header">
    <h1 className="title">{children}</h1>
    <Underline className="underline" />
  </Container>
);

LineHeader.propTypes = {
  children: node.isRequired,
  align: oneOf(['left', 'center']),
};

LineHeader.defaultProps = {
  align: 'left',
};

export default LineHeader;
