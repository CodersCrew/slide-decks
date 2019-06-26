import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div``;
const Left = styled.div``;
const Line = styled.div``;
const Right = styled.div``;
const Content = styled.div``;
const Items = styled.div``;

const Pineapple = ({ title, content, items }) => {
    <Container>
        <Left>
            <img src="/static/icons/light/pineapple.svg" />
            <Line></Line>
            <p> 2018 </p>
        </Left>
        <Right>
            <LineHeader>{title}</LineHeader>
            <Content>{content}</Content>
            <Items>
                {items.map(item => (
                <Item key={item.name} {...item} />
                ))}
            </Items>
        </Right>
    </Container>
}

Pineapple.propTypes = {
    title: string,
    content: string,
    items: arrayOf(
        exact({
            name: string,
            content: string
        })
    )
}

export default Pineapple;