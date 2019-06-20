import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px 5px 10px;
    width: 100%;
    z-index: 10;
    background: rgb(0, 0, 0, 0.7);
   
    p {
        color: var(--white);
        width: 50px;
    }
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
    margin-right: 20px;
`;

const Right = styled.button`
    border-top-left-radius: 0;
    width: 50px;
    height: 40px;
    text-align: center;
    border-top-right-radius: 30px;
    margin-left: 20px;
`;



const Panel = ({ actualSlide, slides, prevSlide, nextSlide, newTheme }) => {
    return (
    <Container className="container">
        <div className="slide-number">
            <p> {actualSlide}/{slides - 1} </p>
        </div>
        <div className="buttons">
            <Left id="left" onClick={prevSlide}> L </Left>
            <Right id="right" onClick={nextSlide}> R </Right>
        </div>
        <ThemeButton id="themebtn" onClick={newTheme}> Change </ThemeButton>
    </Container>
    );
};

export default Panel;