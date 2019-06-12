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
  align-self: ${props => props.alignSelf};
  background-color: var(--primary);
  border-radius: 2px;
`;

const LineHeader = ({ align, alignSelf, children }) => (
  <Container align={align} className="line-header">
    <h1 className="title">{children}</h1>
    <Underline alignSelf={alignSelf} className="underline" />
  </Container>
);

LineHeader.propTypes = {
  children: node.isRequired,
  align: oneOf(['left', 'center']),
  alignSelf: oneOf(['left', 'center']),
};

LineHeader.defaultProps = {
  align: 'left',
};

export default LineHeader;
