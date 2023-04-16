import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
  const images = [
    'https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/159643/laptop-ipad-organic-natural-159643.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4557822/pexels-photo-4557822.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg?auto=compress&cs=tinysrgb&w=600',
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
            <Button>
              <Link href='/' passHref>
                Shop now
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </Button>
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

const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  width: 100%;
  background-color: rgba(56, 122, 197, 0.5);
  color: var(--clr-white);
  outline-color: #043369;
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

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: inherit;
    }
  }
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
  color: var(--clr-white);
`;

const MainHeading = styled.h2`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.8rem;
  color: inherit;
`;

const SubHeading = styled.h3`
  font-weight: 300;
  font-size: 1.3rem;
  color: inherit;
`;

export default Category;
