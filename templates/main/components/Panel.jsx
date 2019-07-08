import styled from 'styled-components';
import { Component } from 'react';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    padding: 0 20px 7px 0;
   
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
    justify-content: center;
    background-color: rgb(184, 184, 184, 0.5);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-right: 2px;
    padding: 8px 5px 0 3px;
    transition: opacity 1500ms;
    opacity: 0;
    
    &.show {
        opacity: 1;
    }

    button {
        background: none;
        border: none;
        outline: none;
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
    margin-left: 40px;
    padding-right: 10px;
`;

const ShowIcon = styled.button`
    background-color: rgb(184, 184, 184, 0.5);
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: center;
    outline: none;
    border: none;
    cursor: pointer;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    img {
        transform: rotate(0deg);
        transition: transform 700ms;

        &.show{
            transform: rotate(-180deg);
        }
    }
`;


class Panel extends Component {
    constructor(props){
        super(props);

        this.state = {
            isMinimized: false,
        }
    }

    toggleToolbar = () => {
        const checkTo = !this.state.isMinimized;
        this.setState({ isMinimized: checkTo });
    }

    render(){
        const { actualSlide, slides, prevSlide, nextSlide, newTheme } = this.props;
        return (
        <Container>
            <Wrapper className={ this.state.isMinimized ? "show" : null }>
                <button onClick={newTheme}><img src="/static/icons/light/theme_btn.svg"/></button>
                <Arrows className="arrows">
                    <button onClick={prevSlide}><img src="/static/icons/light/left_arrow.svg"/></button>
                    <SlideNumber className="slide-number">
                        <p> {actualSlide + 1}|{slides} </p>
                    </SlideNumber>
                    <button onClick={nextSlide}><img src="/static/icons/light/right_arrow.svg"/></button>
                </Arrows>
            </Wrapper>
            <ShowIcon onClick={this.toggleToolbar}><img  className={ this.state.isMinimized ? "show" : null } src="/static/icons/light/small_arrow_up.svg"/></ShowIcon>
        </Container>
        );
    };
};

export default Panel;