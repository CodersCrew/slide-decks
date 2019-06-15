import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { BoxHeading, LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 111px 64px;
  ${props => props.styles}
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 80px 72px;
  width: 100%;
`;

const NumberItems = ({ styles, title, content, items }) => (
  <Container styles={styles} className="number-items">
    <LineHeader>{title}</LineHeader>
    <BoxHeading content={content}>
      <Items className="items">
        {items.map(item => (
          <Item key={item.number} {...item} />
        ))}
      </Items>
    </BoxHeading>
  </Container>
);

NumberItems.propTypes = {
  title: string,
  content: string,
  items: arrayOf(
    exact({
      number: string,
      title: string,
      content: string,
    }),
  ),
  styles: arrayOf(string),
};

export default NumberItems;
