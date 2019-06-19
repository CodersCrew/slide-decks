import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    bottom: 0px;
    height: 40px;
    width: 100%;
    z-index: 10;
`;

const ProgressLine = styled.div`
    background: var(--blue);
    height: 100%;
    transition: width .2s ease-in;
`;

export function nextStep({ keyCode }) {
    const { slideIndex } = this.state;
    if(keyCode === 39){
    this.setState({ percentage: this.state.percentage + (1/(this.slidesCount - 1))*100 })
    }
  }

export function prevStep({ keyCode }) {
    const { slideIndex } = this.state;
    if(keyCode === 37){
    this.setState({ percentage: this.state.percentage - (1/(this.slidesCount - 1))*100 })
    }
  }

const ProgressBar = ({ percentage }) => (
        <Container className="progress-bar">
            <ProgressLine style={{ width: `${percentage}%` }}/>
        </Container>
    );

export default ProgressBar;