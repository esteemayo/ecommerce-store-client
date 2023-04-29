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
  
`;

const ImageContainer = styled.div`

`;

const OverviewContainer = styled.div`

`;

const ProductName = styled.h2`
  
`;

const Description = styled.p`
  
`;

const Right = styled.div`
  
`;

const CartContainer = styled.div`
  
`;

const ProductPrice = styled.span`
  
`;

const CartButton = styled.button`
  
`;

export default WishlistCard;
