import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

import CardPrice from './CardPrice';
import Button from './Button';
import CardHeading from './CardHeading';
import CardReview from './CardReview';

import WishlistButton from '../buttons/WishlistButton';
import FavoriteButton from '../buttons/FavoriteButton';

const CardInfo = ({
  url,
  product,
  initialPrice,
  priceLabel,
  reviewLabel,
  wished,
  onOpen,
}) => {
  return (
    <Container>
      <CardHeading name={product.name} />
      <CardReview
        reviewLabel={reviewLabel}
        ratingsAverage={product.ratingsAverage}
        ratingsQuantity={product.ratingsQuantity}
      />
      <CardPrice
        inStock={product.inStock}
        initialPrice={initialPrice}
        priceLabel={priceLabel}
      />
      <Button onClick={onOpen} />
      <ButtonContainer>
        <WishlistButton
          product={product}
          wished={wished}
          actionId={product.id}
        />
        <FavoriteButton />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  background-color: inherit;
  border-radius: 0.5rem;

  @media only screen and (max-width: 35em) {
    padding: 1rem;
  }
`;

const ButtonContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 37.5em) {
    padding-top: 1.7rem;
  }
`;

CardInfo.propTypes = {
  url: PropTypes.string,
  product: PropTypes.object,
  initialPrice: PropTypes.number,
  priceLabel: PropTypes.number,
  reviewLabel: PropTypes.string,
  wished: PropTypes.array,
  onOpen: PropTypes.func.isRequired,
};

export default CardInfo;
