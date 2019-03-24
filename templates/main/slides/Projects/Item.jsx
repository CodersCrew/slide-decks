import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 296px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const Title = styled.h4`
  box-sizing: border-box;
  width: 100%;
  padding: 16px 32px;
  border-radius: 0 0 8px 8px;
  background-color: var(--primary);
  color: var(--white);
`;

const Content = styled.div`
  padding-top: 24px;
  margin-top: auto;
`;

const Item = ({ image, title, content }) => (
  <Container className="item">
    <Image src={image} className="image" />
    <Title className="title">{title}</Title>
    <Content className="content">{content}</Content>
  </Container>
);

Item.propTypes = {
  image: string,
  title: string,
  content: string,
};

export default Item;
