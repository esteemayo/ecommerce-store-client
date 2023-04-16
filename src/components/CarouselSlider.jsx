import Image from 'next/image';
import styled from 'styled-components';

const CarouselSlider = () => {
  return (
    <Container>
      <Wrapper>
        <Article>
          <Image
            src='/img/hero-1.webp'
            width={1800}
            height={800}
            alt=''
          />
        </Article>
        <ArrowButton type='button' direction='left'>

        </ArrowButton>
        <ArrowButton type='button' direction='right'>

        </ArrowButton>
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

const ArrowButton = styled.button`
  
`;

export default CarouselSlider;
