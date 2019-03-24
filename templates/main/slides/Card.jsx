import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';
import { renderContent } from '../utils';
import { BoxHeader, Icon } from '../components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${props => props.styles}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: url('${props => props.image}') no-repeat center/cover;
    opacity: 0.75;
  }
`;

const Middle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 800px;
  padding: 40px 96px;
  border-radius: 8px;
  background-color: var(--slide-background);
  text-align: center;
`;

const Header = styled(BoxHeader)`
  top: -48px;
`;

const Subtitle = styled.h3`
  color: var(--text-primary);
`;

const Content = styled.div`
  margin-top: 32px;
`;

const Card = ({ image, title, subtitle, icon, content, styles }) => (
  <Container styles={styles} image={image} className="card">
    <Middle>
      <Header align="all">{title}</Header>
      <Icon src={icon} width={160} height={160} fill="var(--primary)" />
      <Subtitle>{subtitle}</Subtitle>
      <Content>{renderContent(content)}</Content>
    </Middle>
  </Container>
);

Card.propTypes = {
  image: string,
  icon: string,
  title: string,
  subtitle: string,
  content: string,
  styles: arrayOf(string),
};

export default Card;
