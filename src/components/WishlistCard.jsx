import Image from 'next/image';
import styled from 'styled-components';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WishlistCard = () => {
  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image src='/img/img-7.jpg' width={80} height={80} alt='' />
        </ImageContainer>
        <OverviewContainer>
          <ProductName>The Stanley Rain Jacket in Black</ProductName>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, officiis fugiat voluptatum!
          </Description>
        </OverviewContainer>
      </Left>
      <Right>
        <CartContainer>
          <ProductPrice>$12.79</ProductPrice>
          <CartButton type='button'>
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to cart
          </CartButton>
        </CartContainer>
      </Right>
    </Container>
  );
}

const Container = styled.article`
  padding: 3rem;
  background-color: var(--clr-white);
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.25);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.25);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.25);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const ImageContainer = styled.div`
  img {
    display: block;
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }
`;

const OverviewContainer = styled.div`

`;

const ProductName = styled.h2`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  color: #6e6e6e;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const Description = styled.p`
  font-size: 1.6rem;
  color: #999;;
  line-height: 1.2;
  word-wrap: break-word;
`;

const Right = styled.div`
  flex: 1;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const ProductPrice = styled.span`
  font-weight: 700;
  font-size: 2.23rem;
`;

const CartButton = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  background-color: #6d857f;
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #89a8a0 50%
  );
  background-size: 220%;
`;

export default WishlistCard;
