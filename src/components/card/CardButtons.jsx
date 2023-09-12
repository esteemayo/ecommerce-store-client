import styled from 'styled-components';
import PropTypes from 'prop-types';

import FavoriteButton from '../buttons/FavoriteButton';
import WishlistButton from '../buttons/WishlistButton';

const CardButtons = ({ product, productId, wished }) => {
  return (
    <Container>
      <WishlistButton
        product={product}
        wished={wished}
        actionId={productId}
      />
      <FavoriteButton />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 37.5em) {
    padding-top: 1.7rem;
  }
`;

CardButtons.propTypes = {
  product: PropTypes.object,
  productId: PropTypes.string,
  wished: PropTypes.array,
};

export default CardButtons;
