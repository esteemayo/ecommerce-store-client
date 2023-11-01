'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';

import { sliderItems } from '@/data';
import SliderItem from './SliderItem';

interface IDirection {
  direction: string;
}

interface IActive {
  active: boolean;
}

const CarouselSlider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const handlePrev = useCallback(() => {
    setSlideNumber((value) => value - 1);
  }, []);

  const handleNext = useCallback(() => {
    setSlideNumber((value) => value + 1);
  }, []);

  useEffect(() => {
    const lastIndex = sliderItems.length - 1;

    if (slideNumber < 0) {
      setSlideNumber(lastIndex);
    }

    if (slideNumber > lastIndex) {
      setSlideNumber(0);
    }
  }, [slideNumber]);

  useEffect(() => {
    const slider = setInterval(() => {
      setSlideNumber((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(slider);
  }, [slideNumber]);

  return (
    <Container>
      <Wrapper>
        {sliderItems.map((item, index) => {
          let position = 'nextSlide';

          if (index === slideNumber) {
            position = 'activeSlide';
          }

          if (
            index === slideNumber - 1 ||
            (slideNumber === 0 && index === sliderItems.length - 1)
          ) {
            position = 'lastSlide';
          }

          return <SliderItem key={item.id} position={position} {...item} />;
        })}
        <ArrowButton type='button' direction='left' onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ArrowButton>
        <ArrowButton type='button' direction='right' onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ArrowButton>
        <ActiveSlideContainer>
          {sliderItems.map((_, index) => {
            return (
              <ActiveSlideButton
                key={index}
                type='button'
                active={index === slideNumber}
                onClick={() => setSlideNumber(index)}
              />
            );
          })}
        </ActiveSlideContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 40vw;
  background-color: #f1ede7;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const ArrowButton = styled.button<IDirection>`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '1rem'};
  right: ${({ direction }) => direction === 'right' && '2.6rem'};
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.bgCarouselBtn};
  color: ${({ theme }) => theme.textCarouselBtn};
  border: 2px solid ${({ theme }) => theme.bgCarouselBtn};
  outline: none;
  border-radius: 50%;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: all 0.5s ease;

  @media only screen and (max-width: 64em) {
    left: ${({ direction }) => direction === 'left' && '2.15rem'};
  }

  @media only screen and (max-width: 37.5em) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media only screen and (max-width: 25em) {
    width: 3rem;
    height: 3rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 2.5rem;
    height: 2.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.bgCarouselBtnHov};
    color: ${({ theme }) => theme.bgCarouselBtn};
  }

  svg {
    font-size: inherit;
    color: inherit;
  }
`;

const ActiveSlideContainer = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-90%, -50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: 37.5em) {
    top: 80%;
  }
`;

const ActiveSlideButton = styled.button<IActive>`
  border: none;
  width: ${({ active }) => (active ? '1.5rem' : '1rem')};
  height: ${({ active }) => (active ? '1.5rem' : '1rem')};
  background-color: ${({ active, theme }) =>
    active ? theme.bgActiveBtn : theme.bgCarActiveBtn};
  border-radius: 50%;
  outline-color: #f5f5f5;
  cursor: pointer;

  @media only screen and (max-width: 25em) {
    width: ${({ active }) => (active ? '1.3rem' : '0.8rem')};
    height: ${({ active }) => (active ? '1.3rem' : '0.8rem')};
  }
`;

export default CarouselSlider;
