import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;

  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Line = styled.div`
  position: relative;
  margin-right: 64px;
  text-align: right;
  flex: 1;

  p {
    position: absolute;
    top: calc(50% - 60px / 2);
    right: 40px;
    color: var(--white);
    font-weight: var(--bold);
  }
`;

const Item = ({ image, name, content }) => (
  <Container>
    <Line>
      <img src={image} alt="" />
      <p>{name}</p>
    </Line>
    <p>{content}</p>
  </Container>
);

Item.propTypes = {
  image: string,
  name: string,
  content: string,
};

export default Item;
