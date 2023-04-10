import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
          <ProductName>iPhone 14</ProductName>
          <ReviewContainer>
            <StarRating value={5} />
            <Reviews>(<span><span>6 reviews</span></span>)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <Prices>
              <Discount>297</Discount>
              <Price>235</Price>
            </Prices>
          </PriceContainer>
          <Button>add to cart</Button>
          <FavWrapper>
            <WishlistButton>add to wishlist</WishlistButton>
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
          <ProductName>iPhone 14</ProductName>
          <ReviewContainer>
            <StarRating value={5} />
            <Reviews>(<span>6 reviews</span>)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <Prices>
              <Discount>297</Discount>
              <Price>235</Price>
            </Prices>
          </PriceContainer>
          <Button>add to cart</Button>
          <FavWrapper>
            <WishlistButton>add to wishlist</WishlistButton>
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
          <ProductName>iPhone 14</ProductName>
          <ReviewContainer>
            <StarRating value={5} />
            <Reviews>(<span>6 reviews</span>)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <Prices>
              <Discount>297</Discount>
              <Price>235</Price>
            </Prices>
          </PriceContainer>
          <Button>add to cart</Button>
          <FavWrapper>
            <WishlistButton>add to wishlist</WishlistButton>
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
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 1px 3px 17px 1px rgba(156,156,156,0.8);
  -webkit-box-shadow: 1px 3px 17px 1px rgba(156,156,156,0.8);
  -moz-box-shadow: 1px 3px 17px 1px rgba(156,156,156,0.8);

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
`;

const ProductName = styled.h3`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.8rem;
  color: #979797;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2.3rem;
  }
`;

const Reviews = styled.div`
  span {
    color: #1658a3;
  }
`;

const PriceContainer = styled.div`
  
`;

const Prices = styled.div`
  
`;

const Price = styled.span`
  
`;

const Discount = styled.span`
  
`;

const Button = styled.button`
  
`;

const FavWrapper = styled.div`
  
`;

const WishlistButton = styled.button`
  
`;

const LikeButton = styled.button`
  
`;

export default Product;
