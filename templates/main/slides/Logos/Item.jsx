import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  padding: 48px 64px;
  background-color: var(--white);
  border: 4px solid var(--grey-lighter);
  border-radius: 8px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Item = ({ image }) => (
  <Container className="item">
    <Image src={image} className="image" />
  </Container>
);

Item.propTypes = {
  image: string,
};

export default Item;
