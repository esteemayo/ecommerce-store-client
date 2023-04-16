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
    '/img/hero-1.webp',
    '/img/hero-2.jpg',
    '/img/hero-3.jpg',
    'https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3784391/pexels-photo-3784391.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4968390/pexels-photo-4968390.jpeg?auto=compress&cs=tinysrgb&w=600',
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
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-90%,-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActiveSlideButton = styled.button`
  border: none;
  width: ${({ active }) => active ? '1.5rem' : '1rem'};
  height: ${({ active }) => active ? '1.5rem' : '1rem'};
  background-color: ${({ active }) => active ? '#535353' : 'var(--clr-white)'};
  border-radius: 50%;
  outline-color: #f5f5f5;
  cursor: pointer;
`;

export default CarouselSlider;
