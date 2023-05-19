import styled from 'styled-components';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <Container>
      <Image
        src={product.images[0]}
        width={300}
        height={200}
        alt=''
      />
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
