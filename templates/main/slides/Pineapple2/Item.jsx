import styled from 'styled-components';
import { string, number } from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 66px;
    margin-top: 69px;
    margin-left: -112px;
`;
const Circle = styled.div`
    position: relative;
    margin-bottom: 50px; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 88px;
    min-width: 88px;
    min-height: 88px;
    border-radius: 100%;
    border: 8px solid var(--primary);
    background: var(--white);
    color: var(--primary);
`;

const Value = styled.div`
    font-size: 48px;
    line-height: 65px;
    font-weight: var(--bold);
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 28px;

    h4 {
        font-weight: var(--bold);
        margin-bottom: -12px;
    },

    p {
        color: var(--grey);
        margin-top: 8px;
    }
`;

const Underline = styled.div`
    margin-left: -28px;
`;

const Item = ({ value, name, content }) => (
    <Container>
            <Circle>
                <Value>{value}</Value>
            </Circle>
            <Description>
                <h4>{name}</h4>
                <Underline>
                    <img src="/static/icons/light/underline_pineapple2.svg" />
                </Underline>
                <p>{content}</p>
            </Description>
    </Container>
);

Item.propTypes = {
    value: number,
    name: string,
    content: string,
};

export default Item;