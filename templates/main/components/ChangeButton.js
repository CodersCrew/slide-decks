import styled from 'styled-components';
import onInit from '../scripts';

const Container = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
`;


const ChangeButton = () => (
    <Container>
        <Button onClick={() => onInit}> Light </Button>
    </Container>
);

export default ChangeButton;