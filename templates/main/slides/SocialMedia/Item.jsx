import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  object-fit: cover;
  width: 740px;
  height: 100%;
`;

const Description = styled.div`
  padding: 84px 64px 83px 64px;

  h4 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;


const Item = ({ image, line, title, content }) => (
  <Container>
    <Image src={image} />
    <img src={line} alt="" />
    <Description>
      <h4>{title}</h4>
      <p>{content}</p>
    </Description>
  </Container>
);

Item.propTypes = {
  image: string,
  line: string,
  title: string,
  content: string,
};

export default Item;
