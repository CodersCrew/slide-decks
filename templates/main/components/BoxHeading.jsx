import styled from 'styled-components';
import { node, oneOf, string, bool } from 'prop-types';
import BoxHeader from './BoxHeader';

const Content = styled.p`
  text-align: ${props => props.align};
  margin: ${props => (props.withMargin ? "80px" : 0)};
  padding: ${props => (props.withPadding ? '0 80px' : 0)};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 680px;
  margin-top: 64px;
`;

const BoxHeading = ({ align, title, content, withPadding, withMargin, children }) => (
  <>
    {title && <BoxHeader align={align}>{title}</BoxHeader>}
    {content && (
      <Content align={align} withPadding={withPadding} withMargin={withMargin} className="content">
        {content}
      </Content>
    )}
    <Wrapper className="wrapper">{children}</Wrapper>
  </>
);

BoxHeading.propTypes = {
  children: node.isRequired,
  content: string,
  title: string,
  withPadding: bool,
  withMargin: bool,
  align: oneOf(['left', 'center']),
};

BoxHeading.defaultProps = {
  align: 'left',
};

export default BoxHeading;
