'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';

import { sliderItems } from '@/data';

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
          const { id, img, url, desc, title } = item;
          let position = 'nextSlide';

          if (index === slideNumber) {
            position = 'activeSlide';
          }

          if (index === slideNumber - 1 ||
            (slideNumber === 0 && index === sliderItems.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <Article key={id} type={position}>
              <ImageContainer>
                <StyledImage src={img} fill={true} alt='' />
              </ImageContainer>
              <InfoContainer>
                <Title>{title}</Title>
                <Description>{desc}</Description>
                <Link href={url} passHref>
                  <Button type='button'>Shop now</Button>
                </Link>
              </InfoContainer>
            </Article>
          );
        })}
        <ArrowButton
          type='button'
          direction='left'
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </ArrowButton>
        <ArrowButton
          type='button'
          direction='right'
          onClick={handleNext}
        >
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
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 5rem;
  padding-right: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textSlider};
  position: absolute;
  top: 15%;
  right: 3rem;

  @media only screen and (max-width: 64em) {
    padding: 3rem;
    padding-right: 0;
  }

  @media only screen and (max-width: 50em) {
    width: 100%;
    padding: 0;
    line-height: 1.3;
    top: 50%;
    left: 75%;
    right: 0;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 37.5em) {
    top: 40%;
    left: 67%;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: inherit;
      outline: none;
    }
    
    &:active,
    &:hover {
      color: currentColor;
    }
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  color: inherit;

  @media only screen and (max-width: 64em) {
    font-size: 4.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 4.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 3rem;
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 2.7rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.65rem;
  }
`;

const Description = styled.p`
  width: 60%;
  margin: 3rem 0;
  font-weight: 500;
  font-size: 2rem;
  color: inherit;
  letter-spacing: 3px;

  @media only screen and (max-width: 64em) {
    font-size: 1.7rem;
    letter-spacing: 0.5rem;
    margin: 2rem 0;
  }

  @media only screen and (max-width: 50em) {
    width: 65% !important;
    font-size: 1.6rem;
    margin: 1.5rem 0;
  }

  @media only screen and (max-width: 37.5em) {
    margin: 1rem 0;
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 1.45rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.4rem;
    letter-spacing: 0;
  }

  @media only screen and (max-width: 18.75em) {
    width: 68% !important;
    font-size: 1.3rem;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 1rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  background-color: transparent;
  color: inherit;
  border: 3px solid ${({ theme }) => theme.textSlider};
  border-radius: 3px;
  outline-color: #ccc;
  cursor: pointer;

  @media only screen and (max-width: 64em) {
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.57rem;
    border-width: 2px;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 0.7rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 31.25em) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.4rem;
    border-width: 1px;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.37rem;
  }

  @media only screen and (max-width: 18.75em) {
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 1.2rem;
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
  background-color: ${({ active, theme }) => active ? theme.bgActiveBtn : theme.bgCarActiveBtn};
  border-radius: 50%;
  outline-color: #f5f5f5;
  cursor: pointer;
  
  @media only screen and (max-width: 25em) {
    width: ${({ active }) => active ? '1.3rem' : '0.8rem'};
    height: ${({ active }) => active ? '1.3rem' : '0.8rem'};
  }
`;

export default CarouselSlider;
