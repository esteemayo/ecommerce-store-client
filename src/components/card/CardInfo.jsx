import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardPrice from './CardPrice';
import Button from './Button';
import CardHeading from './CardHeading';
import CardReview from './CardReview';
import CardButtons from './CardButtons';

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
      <CardHeading
        url={url}
        name={product.name}
      />
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
      <CardButtons
        product={product}
        wished={wished}
        productId={product.id}
      />
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
