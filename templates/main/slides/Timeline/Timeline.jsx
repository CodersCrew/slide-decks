import styled from 'styled-components';
import { string, arrayOf, exact, bool } from 'prop-types';
import { BoxHeading, LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${props => (props.first ? '40px' : '104px')};
  ${props => props.styles}
`;

const Header = styled.div`
  margin-left: 64px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: ${props => (props.first ? '80px' : 0)};
  padding-right: ${props => (props.last ? '80px' : 0)};
`;

const Timeline = ({ styles, title, content, first, last, items }) => (
  <Container styles={styles} className="timeline" first={first}>
    <Header>
      <LineHeader>{title}</LineHeader>
    </Header>
    <BoxHeading content={content} withPadding>
      <Items first={first} last={last} className="items">
        {items.map((item, i) => {
          const isFirst = first && i === 0;
          const isLast = last && i === items.length - 1;
          return <Item key={item.date} {...item} first={isFirst} last={isLast} />;
        })}
      </Items>
    </BoxHeading>
  </Container>
);

Timeline.propTypes = {
  title: string,
  content: string,
  first: bool,
  last: bool,
  items: arrayOf(
    exact({
      image: string,
      date: string,
      title: string,
      content: string,
    }),
  ),
  styles: arrayOf(string),
};

export default Timeline;
