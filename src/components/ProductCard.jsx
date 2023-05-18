import styled from 'styled-components';

const ProductCard = () => {
  return (
    <Container>
      ProductCard
    </Container>
  );
}

const Container = styled.article`
  width: 40rem;
  background-color: var(--clr-white);
  border-radius: 0.5rem;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
`;

export default ProductCard;
