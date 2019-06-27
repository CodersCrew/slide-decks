import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    padding: 0px 34px 10px 0px;
    width: 100%;
    z-index: 10;
   
    p {
        color: var(--blue);
        font-size: 25px;
        font-weight: var(--bold);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end; 
    
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;

const SlideNumber = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    width: 80px;
    text-align: center;
`;

const Arrows = styled.div`
    display: flex;
    margin-left: 59px;
    cursor: pointer;
`;

const Panel = ({ actualSlide, slides, prevSlide, nextSlide, newTheme }) => {
    return (
    <Container className="container">
        <Wrapper className="wrapper">
            <button onClick={newTheme}><img src="/static/icons/light/theme_btn.svg"/></button>
            <Arrows className="arrows">
                <button onClick={prevSlide}><img src="/static/icons/light/left_arrow.svg"/></button>
                <SlideNumber className="slide-number">
                    <p> {actualSlide + 1}|{slides} </p>
                </SlideNumber>
                <button onClick={nextSlide}><img src="/static/icons/light/right_arrow.svg"/></button>
            </Arrows>
        </Wrapper>
    </Container>
    );
};

export default Panel;