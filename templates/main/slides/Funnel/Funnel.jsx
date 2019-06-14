import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div`
  padding: 40px 64px 101px 64px;
`;
const Items = styled.div`
  margin-top: 48px;
`;

const Funnel = ({ title, items }) => (
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
