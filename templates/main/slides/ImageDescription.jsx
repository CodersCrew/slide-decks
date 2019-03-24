import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';
import { renderContent } from '../utils';
import { LineHeader } from '../components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${props => props.styles}
`;

const Left = styled.div`
  width: 50%;
  background: url('${props => props.src}') no-repeat center/cover;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 0 80px 0 64px;
`;

const Middle = styled.div`
  width: 100%;
`;

const Content = styled.div`
  text-align: left;
`;

const ImageDescription = ({ image, title, content, styles }) => (
  <Container styles={styles} className="image-description">
    <Left src={image} className="left-column" />
    <Right className="right-column">
      <Middle className="middle">
        <LineHeader>{title}</LineHeader>
        <Content className="content">{renderContent(content)}</Content>
      </Middle>
    </Right>
  </Container>
);

ImageDescription.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  content: string.isRequired,
  styles: arrayOf(string),
};

export default ImageDescription;
