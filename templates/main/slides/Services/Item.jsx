import styled from 'styled-components';
import { string } from 'prop-types';
import { Icon } from '../../components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Left = styled.div`
  min-width: 80px;
`;

const Right = styled.div`
  margin-left: 32px;
  text-align: left;
`;

const Title = styled.h4`
  margin: 0;
`;

const Content = styled.div`
  margin-top: 8px;
`;

const Services = ({ icon, title, content }) => (
  <Container className="item">
    <Left className="left-column">
      <Icon src={icon} width={80} height={80} fill="var(--primary)" />
    </Left>
    <Right className="right-column">
      <Title className="title">{title}</Title>
      <Content className="content">{content}</Content>
    </Right>
  </Container>
);

Services.propTypes = {
  icon: string,
  title: string,
  content: string,
};

export default Services;
