import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';
import { renderContent } from '../utils';
import { LineHeader } from '../components';

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  height: 100%;
  padding: 40px 80px 181px 80px;
  ${props => props.styles}
`;

const Header = styled.div`
  margin-bottom: 80px;
`;

const Middle = styled.div`
  display: flex;
  width: 100%;
`;

const Image = styled.div`
  width: 864px;
  height: 648px;
  min-width: 864px;
  min-height: 648px;
  background: url('${props => props.src}') no-repeat center/cover;
  border-radius: 8px;
`;

const Content = styled.div`
  text-align: left;
  margin-left: 64px;
  padding-top: 24px;
`;

const ImageDescription2 = ({ title, image, content, styles }) => (
  <Container styles={styles} className="image-description2">
    <Header>
      <LineHeader>{title}</LineHeader>
    </Header>
    <Middle className="middle">
      <Image src={image} className="image" />
      <Content className="content">{renderContent(content)}</Content>
    </Middle>
  </Container>
);

ImageDescription2.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  content: string.isRequired,
  styles: arrayOf(string),
};

export default ImageDescription2;
