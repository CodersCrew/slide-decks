import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 20px;
    right: 15px;
    text-align: center;
`;

const SlideNumber = styled.div`
    width: 100px;
    height: 40px;
    margin-bottom: 20px;
`;

const ThemeButton = styled.button`
    width: 100px;
    height: 50px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

const Left = styled.button`
    width: 50px;
    height: 40px;
    text-align: center;
    border-top-left-radius: 30px;
`;

const Right = styled.button`
    border-top-left-radius: 0;
    width: 50px;
    height: 40px;
    text-align: center;
    border-top-right-radius: 30px;
`;

const Panel = ({ actualSlide, slides, prevSlide, nextSlide, newTheme }) => {
    return (<Container className="container">
        <SlideNumber>
            <p> {actualSlide}/{slides - 1} </p>
        </SlideNumber>
        <div className="buttons">
            <Left id="left" onClick={prevSlide}> L </Left>
            <Right id="right" onClick={nextSlide}> R </Right>
        </div>
        <ThemeButton id="themebtn" onClick={newTheme}> Light </ThemeButton>
    </Container>);
};

export default Panel;