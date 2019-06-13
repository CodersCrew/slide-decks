import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div``;
const Items = styled.div``;

const Funnel = ({ title, items, content, name, image }) => (
  <Container>
    <LineHeader>{title}</LineHeader>
    <Items>
      {items.map(item => (
        <Item key={item.name} {...item} />
      ))}
    </Items>
  </Container>
);

Funnel.propTypes = {
  title: string,
  items: arrayOf(
    exact({
      image: string,
      name: string,
      content: string,
    }),
  ),
};

export default Funnel;
