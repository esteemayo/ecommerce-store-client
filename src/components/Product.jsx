import styled from 'styled-components';
import Image from 'next/image';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import StarRating from './StarRating';

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src='https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=600'
          width={300}
          height={200}
          alt=''
        />
        <InfoContainer>
          <ProductName>
            <Link href='/' passHref>
              iPhone 14
            </Link>
          </ProductName>
          <ReviewContainer>
            <StarRating value={5} />
            <Reviews>(<span><span>6 reviews</span></span>)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <Prices>
              <Discount>$297</Discount>
              <Price>$235</Price>
            </Prices>
            <InStock>In stock</InStock>
          </PriceContainer>
          <Button>
            <FontAwesomeIcon icon={faShoppingCart} />
            &nbsp;
            add to cart
          </Button>
          <FavWrapper>
            <WishlistButton>Add to Wishlist</WishlistButton>
            <LikeButton>
              <FontAwesomeIcon icon={faStar} />
              Add to favorites
            </LikeButton>
          </FavWrapper>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <Image
          src='https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=600'
          width={300}
          height={200}
          alt=''
        />
        <InfoContainer>
          <ProductName>
            <Link href='/' passHref>
              iPhone 14
            </Link>
          </ProductName>
          <ReviewContainer>
            <StarRating value={4.5} />
            <Reviews>(<span>6 reviews</span>)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <Prices>
              <Discount>$297</Discount>
              <Price>$235</Price>
            </Prices>
            <InStock>In stock</InStock>
          </PriceContainer>
          <Button>
            <FontAwesomeIcon icon={faShoppingCart} />
            &nbsp;
            add to cart
          </Button>
          <FavWrapper>
            <WishlistButton>
              Add to Wishlist
            </WishlistButton>
            <LikeButton>
              <FontAwesomeIcon icon={faStar} />
              Add to favorites
            </LikeButton>
          </FavWrapper>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <Image
          src='https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=600'
          width={300}
          height={200}
          alt=''
        />
        <InfoContainer>
          <ProductName>
            <Link href='/' passHref>
              iPhone 14
            </Link>
          </ProductName>
          <ReviewContainer>
            <StarRating value={4} />
            <Reviews>(<span>6 reviews</span>)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <Prices>
              <Discount>$297</Discount>
              <Price>$235</Price>
            </Prices>
            <InStock>In stock</InStock>
          </PriceContainer>
          <Button>
            <FontAwesomeIcon icon={faShoppingCart} />
            &nbsp;
            add to cart
          </Button>
          <FavWrapper>
            <WishlistButton>Add to Wishlist</WishlistButton>
            <LikeButton>
              <FontAwesomeIcon icon={faStar} />
              Add to favorites
            </LikeButton>
          </FavWrapper>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4rem;
`;

const Wrapper = styled.div`
  width: 30%;
  background-color: var(--clr-white);
  border-radius: 0.5rem;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);

  & > img {
    width: 100%;
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

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: inherit;
    }

    &:hover,
    &:active {
      text-decoration: underline;
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
  margin: 0.5rem 0 1.5rem 0 ;
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
    width: 1rem;
    height: 1rem;
    background-color: #00e774;
    border-radius: 50%;
  }
`;

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: #6d857f;
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #89a8a0 50%
  );
  background-size: 220%;
  outline-color: #85beae;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--clr-white);
    background-position: 100%;
  }
`;

const FavWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WishlistButton = styled.button`
  border: none;
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  background-color: transparent;
  color: #858585;
  outline-color: #b8b6b6;
  cursor: pointer;
`;

const LikeButton = styled.button`
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  background-color: transparent;
  color: #858585;
  outline-color: #b8b6b6;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1);
  }

  svg {
    font-size: 1.7rem;
  }
`;

export default Product;
