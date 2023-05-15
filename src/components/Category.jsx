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
`;

const Wrapper = styled.div`
  width: 20%;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  position: relative;
  
  & > img {
    width: 100%;
    height: 25rem;
    display: block;
    object-fit: cover;
    border-radius: 3px;
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
