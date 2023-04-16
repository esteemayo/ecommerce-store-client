import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faChevronLeft} />
        </ArrowButton>
        <ArrowButton type='button' direction='right'>
          <FontAwesomeIcon icon={faChevronRight} />
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
  & > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
`;

export default CarouselSlider;
