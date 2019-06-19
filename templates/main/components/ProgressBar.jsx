import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    bottom: 0px;
    height: 40px;
    width: 100%;
    z-index: 10;
`;

const FillerContainer = styled.div`
    background: var(--blue);
    height: 100%;
    transition: width .2s ease-in;
`;

export function nextStep({ keyCode }) {
    const { slideIndex } = this.state;
    if(keyCode === 39){
    this.setState({ percentage: this.state.percentage + ((slideIndex/this.slidesCount)*100) })
    }
  }

export function prevStep({ keyCode }) {
    const { slideIndex } = this.state;
    if(keyCode === 37){
    this.setState({ percentage: this.state.percentage - (slideIndex/this.slidesCount) })
    }
  }

const ProgressBar = ({ percentage }) => (
        <Container className="progress-bar">
            <Filler percentage={percentage} />
        </Container>
    );


const Filler = ({ percentage }) => (
    <FillerContainer style={{ width: `${percentage}%` }}/>
);

export default ProgressBar;