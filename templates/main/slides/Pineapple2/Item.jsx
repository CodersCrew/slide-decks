import styled from 'styled-components';
import { string, number } from 'prop-types';

const Container = styled.div``;
const Image = styled.div``;
const Value = styled.div``;
const Name = styled.div``;
const Content = styled.div``;

const Item = ({ image, value, name, content }) => (
    <Container>
        <Image>
            <img src={image} />
            <Value>{value}</Value>
        </Image>
        <Name>{name}</Name>
        <Content>{content}</Content>
    </Container>
);

Item.propTypes = {
    image: string,
    value: number,
    name: string,
    content: string,
};

export default Item;