import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    padding: 0px 34px 28px 0px;
    width: 100%;
    z-index: 10;
   
    p {
        color: var(--white);
        font-size: 25px;

        &.dark{
            color: var(--dark-grey);
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const SlideNumber = styled.div`
    margin-left: 45px;
    margin-right: 45px;
`;

const Arrows = styled.div`
    display: flex;
    margin-left: 59px;
`;

const Panel = ({ actualSlide, slides, prevSlide, nextSlide, theme, newTheme }) => {
    return (
    <Container className="container">
        <Wrapper className="wrapper">
            <div className="theme-btn" onClick={newTheme}><img src={theme ? "/static/icons/light/light_theme_btn.svg" : "/static/icons/light/dark_theme_btn.svg"} /></div>
            <Arrows className="arrows">
                <div onClick={prevSlide}><img src={theme ? "/static/icons/light/light_left_arrow.svg" : "/static/icons/light/dark_left_arrow.svg"}/></div>
                <SlideNumber className="slide-number">
                    <p className={theme ? null : 'dark'}> {actualSlide}|{slides - 1} </p>
                </SlideNumber>
                <div onClick={nextSlide}><img src={theme ? "/static/icons/light/light_right_arrow.svg" : "/static/icons/light/dark_right_arrow.svg"}/></div>
            </Arrows>
        </Wrapper>
    </Container>
    );
};

export default Panel;