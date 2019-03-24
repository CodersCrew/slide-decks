import styled from 'styled-components';
import { string, number } from 'prop-types';
import { CircularPercent } from '../../components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;
const Title = styled.h4`
  margin: 40px 0 16px;
`;

const Item = ({ value, title, content }) => (
  <Container className="item">
    <CircularPercent strokeWidth={24} sqSize={280} percentage={value} />
    <Title className="title">{title}</Title>
    <div className="content">{content}</div>
  </Container>
);

Item.propTypes = {
  value: number,
  title: string,
  content: string,
};

export default Item;
