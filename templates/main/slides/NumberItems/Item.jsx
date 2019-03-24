import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const NumberValue = styled.h2`
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

const Services = ({ number, title, content }) => (
  <Container className="item">
    <NumberValue className="number">{number}</NumberValue>
    <Right className="right-column">
      <Title className="title">{title}</Title>
      <Content className="content">{content}</Content>
    </Right>
  </Container>
);

Services.propTypes = {
  number: string,
  title: string,
  content: string,
};

export default Services;
