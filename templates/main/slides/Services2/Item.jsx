import styled from 'styled-components';
import { string } from 'prop-types';
import { Icon } from '../../components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;
const Title = styled.h4`
  margin: 16px 0 8px;
`;

const Item = ({ icon, title, content }) => (
  <Container className="item">
    <Icon src={icon} width={80} height={80} fill="var(--primary)" />
    <Title className="title">{title}</Title>
    <div className="content">{content}</div>
  </Container>
);

Item.propTypes = {
  icon: string,
  title: string,
  content: string,
};

export default Item;
