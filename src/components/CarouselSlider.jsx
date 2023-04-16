import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CarouselSlider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const data = [
    '/img/hero-1.webp',
    '/img/hero-2.jpg',
    '/img/hero-3.jpg',
  ];

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (slideNumber < 0) {
      setSlideNumber(lastIndex);
    }

    if (slideNumber > lastIndex) {
      setSlideNumber(0);
    }
  }, [slideNumber, data.length]);

  useEffect(() => {
    const slider = setInterval(() => {
      setSlideNumber(slideNumber + 1);
    }, 5000);

    return () => clearInterval(slider);
  }, [slideNumber]);

  return (
    <Container>
      <Wrapper>
        {data.map((item, index) => {
          let position = 'nextSlide';

          if (index === slideNumber) {
            position = 'activeSlide';
          }

          if (index === slideNumber - 1 ||
            (slideNumber === 0 && index === data.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <Article key={index} type={position}>
              <Image
                src={item}
                width={1800}
                height={800}
                alt=''
              />
            </Article>
          );
        })}
        <ArrowButton
          type='button'
          direction='left'
          onClick={() => setSlideNumber(slideNumber - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </ArrowButton>
        <ArrowButton
          type='button'
          direction='right'
          onClick={() => setSlideNumber(slideNumber + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </ArrowButton>
        <ActiveSlideContainer>

        </ActiveSlideContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  height: 40vw;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ type }) => type === 'activeSlide' ? 1 : 0};
  transform: translateX(${({ type }) => type === 'activeSlide' && 0});
  transform: translateX(${({ type }) => type === 'lastSlide' && '-100%'});
  transform: translateX(${({ type }) => type === 'nextSlide' && '100%'});
  transition: all 0.3s linear;

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
  left: ${({ direction }) => direction === 'left' && '1rem'};
  right: ${({ direction }) => direction === 'right' && '3rem'};
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
  font-size: 1rem;
  background-color: var(--clr-white);
  color: #777;
  border: 2px solid var(--clr-white);
  outline: none;
  border-radius: 50%;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: transparent;
    color: var(--clr-white);
  }

  svg {
    font-size: inherit;
    color: inherit;
  }
`;

const ActiveSlideContainer = styled.div`
  
`;

const ActiveSlideButton = styled.button`
  
`;

export default CarouselSlider;
