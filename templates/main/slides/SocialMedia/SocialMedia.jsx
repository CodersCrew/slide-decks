import styled from 'styled-components';
import { string, exact, arrayOf } from 'prop-types';
import Item from './Item';

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%:
  height: 100%:
`;

const SocialMedia = ({ items }) => (
  <Container>
    <div className="Items">
      {items.map(item => (
        <Item key={item.image} {...item} />
      ))}
    </div>
  </Container>
);

SocialMedia.propTypes = {
  items: arrayOf(
    exact({
      image: string,
      line: string,
      title: string,
      content: string,
    }),
  ),
};

export default SocialMedia;
