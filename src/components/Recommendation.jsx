import Image from 'next/image';
import styled from 'styled-components';

const Recommendation = () => {
  return (
    <Container>
      <Heading>You might also like</Heading>
      <Wrapper>
        <Image src='/img/user-9.jpg' width={500} height={700} alt='' />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  padding: 8rem 4rem;
`;

const Wrapper = styled.div`
  
`;

const Heading = styled.h1`
  display: block;
  text-align: left;
  font-weight: 500;
  font-size: 3.2rem;
`;

const ProductTitle = styled.p`
  
`;

export default Recommendation;
