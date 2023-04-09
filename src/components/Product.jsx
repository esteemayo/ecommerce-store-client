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
            <Reviews>(6 reviews)</Reviews>
          </ReviewContainer>
          <PriceContainer>
            <Prices>
              <Discount>297</Discount>
              <Price>235</Price>
            </Prices>
          </PriceContainer>
          <Button>add to cart</Button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const Wrapper = styled.div`
  
`;

const InfoContainer = styled.div`
  
`;

const ProductName = styled.h3`
  
`;

const ReviewContainer = styled.div`
  
`;

const Reviews = styled.span`
  
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

export default Product;
