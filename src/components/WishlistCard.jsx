import styled from 'styled-components';
import Image from 'next/image';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@mui/icons-material/Close';
import { NumericFormat } from 'react-number-format';

const WishlistCard = ({ id, name, desc, image, price }) => {
  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image src={image} width={80} height={80} alt='' />
        </ImageContainer>
        <OverviewContainer>
          <ProductName>
            <Link href={`/products/${encodeURIComponent(id)}`} passHref>
              {name}
            </Link>
          </ProductName>
          <Description>{desc}</Description>
        </OverviewContainer>
      </Left>
      <Right>
        <CartContainer>
          <ProductPrice>
            <NumericFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </ProductPrice>
          <CartButton type='button'>
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to cart
          </CartButton>
        </CartContainer>
      </Right>
      <CloseButton type='button'>
        <CloseIcon />
      </CloseButton>
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  padding: 3rem;
  background-color: var(--clr-white);
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.25);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.25);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.25);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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

const OverviewContainer = styled.div``;

const ProductName = styled.h2`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  color: #6d857f;
  margin-bottom: 0.5rem;
  line-height: 1;

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: currentColor;
      transition: all 0.3s ease;
      outline-color: #f1e4f4;
    }

    &:hover {
      text-decoration: underline;
      text-decoration-color: #6d857f;
      text-underline-offset: 4px;
    }
  }
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  border-radius: 0.5rem;
  outline-color: #85beae;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-position: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 3rem;
  display: inline-block;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: lighter;
  font-size: 2rem;
  background-color: transparent;
  color: #d2d3d2;
  outline-color: #f1e4f4;
  cursor: pointer;

  svg {
    font-weight: inherit;
    font-size: 2.5rem;
    fill: currentColor;
  }
`;

export default WishlistCard;
