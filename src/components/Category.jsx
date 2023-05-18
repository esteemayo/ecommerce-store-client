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
  }
`;

const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  width: 100%;
  background-color: rgba(137, 168, 160, 0.5);
  color: var(--clr-white);
  outline-color: #89a8a0;
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
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  position: relative;

  @media only screen and (max-width: 64em) {
    width: 32%;
  }
  
  img {
    width: 100%;
    height: 25rem;
    display: block;
    object-fit: cover;
    border-radius: 3px;
  }
  
  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: inherit;
      outline-color: #89a8a0;
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
  color: var(--clr-white);

  @media only screen and (max-width: 64em) {
    top: 70%;
    right: 5rem;
  }
`;

const MainHeading = styled.h2`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.8rem;
  color: inherit;
`;

const SubHeading = styled.h3`
  font-weight: 300;
  font-size: 1.3rem;
  color: inherit;
`;

export default Category;
