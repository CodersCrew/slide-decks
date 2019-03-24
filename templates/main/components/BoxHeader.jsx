import styled from 'styled-components';
import { node, oneOf, string } from 'prop-types';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: ${props => (['all', 'center'].includes(props.align) ? 'center' : 'flex-start')};
`;

const Box = styled.div`
  padding: 16px 48px;
  background-color: var(--primary);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: ${props => (['all', 'center'].includes(props.align) ? '8px' : 0)};
  border-top-right-radius: ${props => (props.align === 'all' ? '8px' : 0)};
  border-top-left-radius: ${props => (props.align === 'all' ? '8px' : 0)};

  > h1 {
    text-align: ${props => props.align};
  }
`;

const Header = styled.h2`
  position: relative;
  top: -4px;
  color: var(--white);
`;

const LineHeader = ({ align, children, className }) => (
  <Container align={align} className={`box-header ${className}`}>
    <Box align={align} className="box">
      <Header className="title">{children}</Header>
    </Box>
  </Container>
);

LineHeader.propTypes = {
  children: node.isRequired,
  className: string,
  align: oneOf(['left', 'center', 'all']),
};

LineHeader.defaultProps = {
  align: 'left',
};

export default LineHeader;
