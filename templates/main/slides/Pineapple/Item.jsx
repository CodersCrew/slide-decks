import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
    padding-bottom: 94px;
    display: flex;
    flex-direction: row;
    border-left: 8px solid var(--blue);

    &:nth-child(2){
        padding-bottom: 239px;
    }
`;

const Circle = styled.div`
    width: 75px;
    height: 75px;
    min-width: 75px;
    min-height: 75px;
    border-radius: 100%;
    border: 8px solid var(--primary);
    background: var(--white);
    color: var(--primary);
    margin-left: -42px;
    margin-right: 32px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
    font-weight: var(--bold);
    margin-bottom: 4px;
    margin-top: 12px;
`;

const Content = styled.div`
    line-height: 48px;
`;


const Item = ({ name, content }) => (
    <Container>
        <Circle></Circle>
        <Wrapper>
            <Name>{name}</Name>
            <Content>{content}</Content>
        </Wrapper>
    </Container>
);

Item.propTypes = {
    name: string,
    content: string,
}

export default Item;