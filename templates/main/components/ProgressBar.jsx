import styled from 'styled-components';
import { number } from 'prop-types';

const Container = styled.div`
    position: absolute;
    top: 0;
    height: 10px;
    width: 100%;
    z-index: 10;
`;

const ProgressLine = styled.div`
    background: var(--blue);
    height: 100%;
    transition: width 400ms ease-in-out;
`;

export function moveProgressBar({ keyCode }){
    const { slideIndex } = this.state;
    if(keyCode === 39 && slideIndex !== this.slidesCount - 1){
        this.setState({ percentage: this.state.percentage + (1/(this.slidesCount-1))*100 });
    }
    else if(keyCode === 39 && slideIndex === this.slidesCount - 1){
        this.setState({ percentage: 100 });
    }
    else if(keyCode === 37 && slideIndex !== 0){
        this.setState({ percentage: this.state.percentage - (1/(this.slidesCount-1))*100 });
    }
    else if(keyCode === 37 && slideIndex === 0){
        this.setState({ percentage: 0 });
    }
}

const ProgressBar = ({ percentage }) => (
        <Container className="progress-bar">
            <ProgressLine style={{ width: `${percentage}%` }}/>
        </Container>
    );

ProgressBar.propTypes = {
    percentage: number,
};

export default ProgressBar;