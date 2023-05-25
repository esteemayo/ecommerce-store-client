import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

const CarouselSlider = () => {
  const dispatch = useDispatch();
  const [slideNumber, setSlideNumber] = useState(0);

  const data = [
    '/img/hero-1.jpg',
    '/img/hero-4.jpg',
    '/img/hero-2.jpg',
    '/img/hero-9.jpg',
    '/img/hero-10.jpg',
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
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
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
          {data.map((_, index) => {
            return (
              <ActiveSlideButton
                type='button'
                active={index === slideNumber}
                key={index}
                onClick={() => setSlideNumber(index)}
              >
                &nbsp;
              </ActiveSlideButton>
            );
          })}
        </ActiveSlideContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  height: 40vw;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
    color: var(--clr-white);
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
  transform: translate(-90%,-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: 37.5em) {
    top: 80%;
  }
`;

const ActiveSlideButton = styled.button`
  border: none;
  width: ${({ active }) => active ? '1.5rem' : '1rem'};
  height: ${({ active }) => active ? '1.5rem' : '1rem'};
  background-color: ${({ active, theme }) => active ? '#535353' : theme.bgCarActiveBtn};
  border-radius: 50%;
  outline-color: #f5f5f5;
  cursor: pointer;
  
  @media only screen and (max-width: 25em) {
    width: ${({ active }) => active ? '1.3rem' : '0.8rem'};
    height: ${({ active }) => active ? '1.3rem' : '0.8rem'};
  }
`;

export default CarouselSlider;
