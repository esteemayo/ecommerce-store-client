import Image from 'next/image';
import styled from 'styled-components';

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
      <Wrapper>
        <Image
          src='https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600'
          width={100}
          height={100}
          alt=''
        />
        <HeadingWrapper>
          <MainHeading>Jeans</MainHeading>
          <SubHeading>100</SubHeading>
        </HeadingWrapper>
        <Button>Click</Button>
      </Wrapper>
      <Wrapper>
        <Image
          src='https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600'
          width={100}
          height={100}
          alt=''
        />
        <HeadingWrapper>
          <MainHeading>Jeans</MainHeading>
          <SubHeading>100</SubHeading>
        </HeadingWrapper>
        <Button>Click</Button>
      </Wrapper>
      <Wrapper>
        <Image
          src='https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600'
          width={100}
          height={100}
          alt=''
        />
        <HeadingWrapper>
          <MainHeading>Jeans</MainHeading>
          <SubHeading>100</SubHeading>
        </HeadingWrapper>
        <Button>Click</Button>
      </Wrapper>
      <Wrapper>
        <Image
          src='https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600'
          width={100}
          height={100}
          alt=''
        />
        <HeadingWrapper>
          <MainHeading>Jeans</MainHeading>
          <SubHeading>100</SubHeading>
        </HeadingWrapper>
        <Button>Click</Button>
      </Wrapper>
      <Wrapper>
        <Image
          src='https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600'
          width={100}
          height={100}
          alt=''
        />
        <HeadingWrapper>
          <MainHeading>Jeans</MainHeading>
          <SubHeading>100</SubHeading>
        </HeadingWrapper>
        <Button>Click</Button>
      </Wrapper>
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
  box-shadow: -1px -1px 35px 3px rgba(0 ,0, 0, 0.17);
  -webkit-box-shadow: -1px -1px 35px 3px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: -1px -1px 35px 3px rgba(0, 0, 0, 0.17);
  position: relative;

  & > img {
    width: 100%;
    height: 15rem;
    display: block;
    object-fit: cover;
  }
`;

const HeadingWrapper = styled.div`
  position: absolute;
  top: 7rem;
  right: 2rem;
  color: #fff;
`;

const MainHeading = styled.h2`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.8rem;
  color: inherit;
`;

const SubHeading = styled.h3`
  font-weight: 300;
  font-size: 1.4rem;
  color: inherit;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  padding: 1rem 2rem;
  width: 100%;
  background-color: #1658a3;
  color: #fff;
  outline-color: #043369;
  cursor: pointer;
`;

export default Category;
