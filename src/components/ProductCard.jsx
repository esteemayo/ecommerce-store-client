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
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
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
  gap: 3rem;
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

export default ProductCard;
