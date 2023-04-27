import Image from 'next/image';
import styled from 'styled-components';
import StarRating from './StarRating';

const ProductCard = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ImageContainer>
            <Image src='/img/img-9.jpg' width={100} height={100} alt='' />
          </ImageContainer>
        </Left>
        <Right>
          <ProductName>The Stanley Rain Jacket in Black</ProductName>
          <ReviewContainer>
            <StarRating value={5} />
            <Reviews>(<span><span>6 reviews</span></span>)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <PriceDiscount>1,599,-</PriceDiscount>
            <ProductPrice>799,-</ProductPrice>
          </PriceContainer>
          <Button type='button'>Add to cart</Button>
          <InStock>50+ pcs. in stock.</InStock>
          <ButtonsContainer>
            <CartButton type='button'>Add to cart</CartButton>
          </ButtonsContainer>
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  background-color: var(--color-white);
  padding: 3rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  border-radius: 1rem;
  cursor: default;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const Left = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;

  img {
    width: 10rem;
    height: 10rem;
    display: block;
    object-fit: cover;
  }
`;

const Right = styled.div`
  flex: 2;
`;

const ProductName = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 2rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.2;
  margin: 1rem 0;
`;

const PriceDiscount = styled.p`
  display: inline-block;
  text-decoration: line-through;
  font-size: 1.4rem;
`;

const ProductPrice = styled.p`
  display: inline-block;
  font-weight: 600;
  font-size: 3rem;
  color: #999;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
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
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-position: 100%;
  }
`;

const InStock = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.3rem;

  &::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: #00e774;
    border-radius: 50%;
  }
`;

const ButtonsContainer = styled.div`
  
`;

const CartButton = styled.button`

`;

const WishlistButton = styled.button`

`;

export default ProductCard;
