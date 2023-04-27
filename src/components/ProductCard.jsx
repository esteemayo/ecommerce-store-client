import styled from 'styled-components';

const ProductCard = () => {
  return (
    <Container>
      ProductCard
    </Container>
  );
}

const Container = styled.div`
  width: 30%;
  background-color: var(--color-white);
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
`;

export default ProductCard;
