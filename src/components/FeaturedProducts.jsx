import styled from 'styled-components';

const FeaturedProducts = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Featured products</Heading>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  padding: 15rem 0;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
`;

const Heading = styled.h1`
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 2.7rem;
  color: #1658a3;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: inline-block;
    width: 4rem;
    height: 3px;
    background-color: #1658a3;
    border-radius: 3px;
  }
`;

export default FeaturedProducts;
