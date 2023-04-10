import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
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
              <Discount>$297</Discount>
              <Price>$235</Price>
            </Prices>
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
          <ProductName>iPhone 14</ProductName>
          <ReviewContainer>
            <StarRating value={5} />
            <Reviews>(<span>6 reviews</span>)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <Prices>
              <Discount>$297</Discount>
              <Price>$235</Price>
            </Prices>
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
          <ProductName>iPhone 14</ProductName>
          <ReviewContainer>
            <StarRating value={5} />
            <Reviews>(<span>6 reviews</span>)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <Prices>
              <Discount>$297</Discount>
              <Price>$235</Price>
            </Prices>
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
  margin-bottom: 0.5rem;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

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
  margin: 0.5rem 0 1.5rem 0 ;
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

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: #2d75c7;
  color: #fff;
  outline-color: #04203f;
  border-radius: 0.5rem;
  cursor: pointer;
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
`;

const LikeButton = styled.button`
  
`;

export default Product;
