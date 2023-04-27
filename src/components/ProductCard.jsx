import styled from 'styled-components';

const ProductCard = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ImageContainer>

          </ImageContainer>
        </Left>
        <Right>
          Right
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 30%;
  background-color: var(--color-white);
  padding: 3rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  border-radius: 1rem;
`;

const Wrapper = styled.div`
  
`;

const Left = styled.div`

`;

const ImageContainer = styled.div`
  
`;

const Right = styled.div`

`;

export default ProductCard;
