'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
  const images = [
    '/img/category-1.jpg',
    '/img/category-2.jpg',
    '/img/category-3.jpg',
    '/img/category-4.jpg',
    '/img/category-5.jpg',
  ];

  return (
    <Container>
      {images.map((item, index) => {
        return (
          <Wrapper key={index}>
            <Image
              src={item}
              width={1200}
              height={1200}
              alt=''
            />
            <HeadingWrapper>
              <MainHeading>Jeans</MainHeading>
              <SubHeading>100</SubHeading>
            </HeadingWrapper>
            <Link href={`/products/category/jeans`} passHref>
              <Button>
                Shop now
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Link>
          </Wrapper>
        );
      })}
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;

  @media only screen and (max-width: 64em) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media only screen and (max-width: 59.375em) {
    gap: 4rem;
  }

  @media only screen and (max-width: 37.5em) {
    gap: 2rem;
  }

  @media only screen and (max-width: 31.25em) {
    gap: 1.5rem;
  }

  @media only screen and (max-width: 26.25em) {
    gap: 3rem;
  }

  @media only screen and (max-width: 18.75em) {
    gap: 1rem;
  }
`;

const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.bgCatBtn};
  color: ${({ theme }) => theme.textCat};
  outline-color: ${({ theme }) => theme.bgCatBtnOut};
  cursor: pointer;
  visibility: hidden;
  opacity: 0;

  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.5s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  width: 20%;
  box-shadow: ${({ theme }) => theme.boxCat};
  -webkit-box-shadow: ${({ theme }) => theme.boxCat};
  -moz-box-shadow: ${({ theme }) => theme.boxCat};
  position: relative;

  @media only screen and (max-width: 64em) {
    width: 32%;
  }

  @media only screen and (max-width: 59.375em) {
    width: 47%;
  }

  @media only screen and (max-width: 26.25em) {
    width: 100%;
  }
  
  img {
    width: 100%;
    height: 25rem;
    display: block;
    object-fit: cover;
    border-radius: 3px;

    @media only screen and (max-width: 37.5em) {
      height: 20rem;
    }

    @media only screen and (max-width: 31.25em) {
      height: 15rem;
    }

    @media only screen and (max-width: 26.25em) {
      height: 30rem;
    }

    @media only screen and (max-width: 23.75em) {
      height: 25rem;
    }

    @media only screen and (max-width: 18.75em) {
      height: 18rem;
    }
  }
  
  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: inherit;
      outline-color: var(--clr-tertiary-green);
    }

    &:active {
      color: currentColor;
    }
  }

  &:hover ${Button} {
    visibility: visible;
    opacity: 1;
  }
`;

const HeadingWrapper = styled.div`
  position: absolute;
  top: 80%;
  right: 2rem;
  transform: translateY(-80%);
  color: ${({ theme }) => theme.textCat};

  @media only screen and (max-width: 64em) {
    top: 70%;
    right: 5rem;
  }

  @media only screen and (max-width: 31.25em) {
    top: 80%;
    right: 3rem;
    line-height: 1.3;
  }

  @media only screen and (max-width: 26.25em) {
    top: 70%;
    right: 7rem;
  }
`;

const MainHeading = styled.h2`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.8rem;
  color: inherit;

  @media only screen and (max-width: 59.375em) {
    font-size: 2.5rem;
    font-weight: 500;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 2.25rem;
  }

  @media only screen and (max-width: 26.25em) {
    font-size: 3.3rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2.3rem;
  }
`;

const SubHeading = styled.h3`
  font-weight: 300;
  font-size: 1.3rem;
  color: inherit;

  @media only screen and (max-width: 59.375em) {
    font-size: 1.85rem;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 26.25em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.7rem;
  }
`;

export default Category;
