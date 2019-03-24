import styled from 'styled-components';
import { string, bool } from 'prop-types';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 342px;
  border-top-left-radius: ${props => (props.first ? '171px' : 0)};
  border-top-right-radius: ${props => (props.last ? '171px' : 0)};
  border-bottom-right-radius: ${props => (props.last ? '171px' : 0)};
  border-bottom-left-radius: ${props => (props.first ? '171px' : 0)};
`;

const DateCircle = styled.div`
  position: absolute;
  top: 264px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  background-color: var(--primary);
  border: 8px solid var(--white);
  font-size: var(--size-sm);
  line-height: 1;
  font-weight: var(--bold);
  color: var(--white);
`;

const Title = styled.h4`
  margin: 96px 0 8px;
  padding: 0 40px;
`;

const Content = styled.div`
  padding: 0 24px;
`;

const Item = ({ image, first, last, date, title, content }) => (
  <Container className="item">
    <Image src={image} first={first} last={last} className="image" />
    <DateCircle className="date">{date}</DateCircle>
    <Title className="title">{title}</Title>
    <Content className="content">{content}</Content>
  </Container>
);

Item.propTypes = {
  image: string,
  date: string,
  title: string,
  content: string,
  first: bool,
  last: bool,
};

export default Item;
