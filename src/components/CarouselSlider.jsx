import styled from 'styled-components';

const CarouselSlider = () => {
  return (
    <Container>
      <Wrapper>
        <Article>

        </Article>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  height: 70vw;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const Article = styled.article`
  
`;

export default CarouselSlider;
