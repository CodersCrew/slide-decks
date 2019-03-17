import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--header-font);
`;

const Center = styled.div`
  max-width: 80%;
  margin-top: -64px;
  text-align: center;
`;

const Title = styled.h1`
  line-height: 1.1;
`;

const Subtitle = styled.div`
  margin-top: 48px;
  font-size: 64px;
  line-height: 1.2;
  color: var(--text-secondary);
`;

const AuthorsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const Authors = styled.div`
  padding: 16px 32px;
  background-color: var(--primary);
  text-align: center;
  font-size: 36px;
  color: #fff;
  font-weight: var(--bold);
`;

const TitleSlide = props => {
  return (
    <Container>
      <Center>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </Center>
      <AuthorsWrapper>
        <Authors>{props.authors}</Authors>
      </AuthorsWrapper>
    </Container>
  );
};

export default TitleSlide;
