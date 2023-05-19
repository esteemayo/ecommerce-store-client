import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  return (
    <Container>
      <Image
        src={product.images[0]}
        width={300}
        height={200}
        alt=''
      />
      <InfoContainer>
        <ProductName>
          <Link
            href={`/products/${encodeURIComponent(product.id)}`}
            passHref
          >
            {product.name}
          </Link>
        </ProductName>
        <ReviewContainer>
          <StarRating value={product.ratingsAverage} />
        </ReviewContainer>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.article`
  width: 35rem;
  background-color: var(--clr-white);
  border-radius: 0.5rem;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);

  img {
    width: 35rem;
    height: 20rem;
    display: block;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

const InfoContainer = styled.div`
  padding: 2rem;
  background-color: inherit;
  border-radius: 0.5rem;
`;

const ProductName = styled.h3`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.8rem;
  color: #6e6e6e;
  margin-bottom: 0.5rem;
  line-height: 1;

  @media only screen and (max-width: 64em) {
    font-size: 1.7rem;
  }

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      text-decoration-color: #e2e9e7;
      color: inherit;
      outline-color: #eee;
      outline-offset: 3px;
      transition: all 0.3s ease;
    }

    &:hover,
    &:active {
      text-decoration: underline;
      text-decoration-color: #e2e9e7;
      text-underline-offset: 3px;
    }
  }
`;

const ReviewContainer = styled.div`

`;

export default ProductCard;
