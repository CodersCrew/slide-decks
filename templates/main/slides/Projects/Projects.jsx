import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { BoxHeading, LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 197px 80px;
  text-align: center;
  ${props => props.styles}
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 80px;
`;

const Projects = ({ title, content, items, styles }) => (
  <Container styles={styles} className="projects">
    <LineHeader alignSelf="center">{title}</LineHeader>
    <BoxHeading align="center" content={content}>
      <Items className="items">
        {items.map(item => (
          <Item key={item.image} {...item} />
        ))}
      </Items>
    </BoxHeading>
  </Container>
);

Projects.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  items: arrayOf(
    exact({
      image: string,
      title: string,
      content: string,
    }),
  ),
  styles: arrayOf(string),
};

export default Projects;
