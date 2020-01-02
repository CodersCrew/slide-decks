import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  p {
    font-size: var(--size-xl);
    line-height: 144px;
    font-weight: var(--bold);
    color: var(--white);
  }
`;

const Line = styled.div`
  position: absolute;
  width: 320px;
  height: 100%;
  background: rgba(43, 158, 235, 0.88);
  margin-left: 240px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: var(--header-font);
  }
`;

const Right = styled.div`
  padding: 80px 80px 0 64px;
`;

const Content = styled.div`
  margin-bottom: 96px;
  font-size: var(--size-sm);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: 116px;
`;

const Items = styled.div`
  position: absolute;
`;

const Pineapple = ({ title, content, items }) => (
  <Container>
    <Left>
      <img src="/icons/light/pineapple.png" />
      <Line>
        <p> 2018 </p>
      </Line>
    </Left>
    <Right>
      <LineHeader>{title}</LineHeader>
      <Content>{content}</Content>
      <Wrapper>
        <Items>
          {items.map(item => (
            <Item key={item.name} {...item} />
          ))}
        </Items>
      </Wrapper>
    </Right>
  </Container>
);

Pineapple.propTypes = {
  title: string,
  content: string,
  items: arrayOf(
    exact({
      name: string,
      content: string,
    }),
  ),
};

export default Pineapple;
