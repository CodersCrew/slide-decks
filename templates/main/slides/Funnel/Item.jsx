import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div``;
const Title = styled.h1``;
const Line = styled.div``;
const Name = styled.div``;
const Content = styled.div``;

const Item = ({ title, image, name, content }) => (
  <Container>
    <Title>{title}</Title>
    <Line src={image}>
      <Name>{name}</Name>
    </Line>
    <Content>{content}</Content>
  </Container>
);

Item.propTypes = {
  title: string,
  image: string,
  name: string,
  content: string,
};

export default Item;
