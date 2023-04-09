import styled from 'styled-components';

const FeaturedProducts = () => {
  return (
    <Container>
      <Wrapper>
        FeaturedProducts
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

export default FeaturedProducts;
