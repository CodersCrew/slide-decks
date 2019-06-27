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

const ProgressBar = ({ percentage }) => (
        <Container className="progress-bar">
            <ProgressLine style={{ width: `${percentage}%` }}/>
        </Container>
    );

ProgressBar.propTypes = {
    percentage: number,
};

export default ProgressBar;