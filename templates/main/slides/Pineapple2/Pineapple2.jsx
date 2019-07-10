import styled from 'styled-components';
import { string, number, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Left = styled.div`
    border-right: 8px solid var(--primary);
`;

const Right = styled.div`
    padding: 40px 185px 110px 64px;
`;

const PineApple = ({ title, items }) => (
    <Container>
        <Left>
            <img src="/static/icons/light/pineapple_2.png" />
        </Left>
        <Right>
            <LineHeader>{title}</LineHeader>
            <div className="items">
                {items.map(item => (
                <Item key={item.value} {...item} />
                ))}
            </div>
        </Right>
    </Container>
);

PineApple.propTypes = {
    title: string,
    items: arrayOf(
        exact({
            value: number,
            name: string,
            content: string,
  }),
 ),
};

export default PineApple;