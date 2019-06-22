import styled from 'styled-components';
import { string, number } from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 66px;
    margin-top: 69px;
    margin-left: -115px;
`;
const Wrapper = styled.div`
    position: relative;
    margin-bottom: 40px; 
    color: var(--blue);
`;

const Value = styled.div`
    position: absolute;
    top: 13px;
    left: 32px;
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

const Item = ({ image, value, name, content }) => (
    <Container>
            <Wrapper>
                <img src={image} />
                <Value>{value}</Value>
            </Wrapper>
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
    image: string,
    value: number,
    name: string,
    content: string,
};

export default Item;