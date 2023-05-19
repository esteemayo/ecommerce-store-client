import styled from 'styled-components';
import Image from 'next/image';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NumericFormat } from 'react-number-format';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import StarRating from './StarRating';

const ProductCard = ({ product, openModal, setIsSelectedProduct }) => {
  const handleOpen = () => {
    openModal(true);
    setIsSelectedProduct(product);
  };

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
          <Reviews>(<span><span>6 reviews</span></span>)</Reviews>
        </ReviewContainer>
        <PriceContainer>
        <Prices>
          <Discount>$297</Discount>
          <Price>
          <NumericFormat
            value={product.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
          </Price>
        </Prices>
        {product.inStock && <InStock>In stock</InStock>}
        </PriceContainer>
        <Button type='button' onClick={handleOpen}>
          <FontAwesomeIcon icon={faShoppingCart} />
          &nbsp;
          add to cart
        </Button>
        <FavWrapper>
        <WishlistButton>
          <FontAwesomeIcon icon={faHeart} />
          Add to Wishlist
        </WishlistButton>
        <LikeButton>
          <FontAwesomeIcon icon={faStar} />
          Add to favorites
        </LikeButton>
        </FavWrapper>
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
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  svg {
    font-size: 2.3rem;
    fill: #89a8a0;
  }
`;

const Reviews = styled.div`
  span {
    color: #89a8a0;
  }
`;

const PriceContainer = styled.div`
  margin: 0.5rem 0 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 1.85rem;
  color: #555;
  line-height: 1;
`;

const Discount = styled.span`
  text-decoration: line-through;
  font-size: 1.7rem;
  color: #adacac;
`;

const InStock = styled.div`
  color: #00e774;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 2px;

  &::before {
    content: '';
    display: inline-block;
  }
`;

const Button = styled.button`

`;

const FavWrapper = styled.div`

`;

const WishlistButton = styled.button`

`;

const LikeButton = styled.button`

`;

export default ProductCard;
