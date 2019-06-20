import styled from 'styled-components';
import { string, number, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div``;
const Items = styled.div``;

const PineApple = ({ title, items }) => (
    <Container>
        <LineHeader>{title}</LineHeader>
        <Items>
            {items.map(item => (
            <Item key={item.value} {...item} />
            ))}
        </Items>
    </Container>
);

PineApple.propTypes = {
    title: string,
    items: arrayOf(
        exact({
            image: string,
            value: number,
            name: string,
            content: string,
  }),
 ),
};

export default PineApple;