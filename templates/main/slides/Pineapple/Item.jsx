import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div``;
const Name = styled.div``;
const Content = styled.div``;


const Item = ({ name, content }) => {
    <Container>
        <Name>{name}</Name>
        <Content>{content}</Content>
    </Container>
}

Item.propTypes = {
    name: string,
    content: string,
}

export default Item;