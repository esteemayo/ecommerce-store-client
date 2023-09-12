import styled from 'styled-components';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const CardReview = ({ reviewLabel, ratingsAverage, ratingsQuantity }) => {
  return (
    <Container>
      <StarRating
        readOnly
        value={ratingsAverage}
        name='read-only'
      />
      <Wrapper>
        <Rating>({ratingsQuantity} {reviewLabel})</Rating>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  svg {
    font-size: 2.3rem;
    fill: ${({ theme }) => theme.star};

    @media only screen and (max-width: 35em) {
      font-size: 2rem;
    }
  }
`;

const Wrapper = styled.div`
  span {
    color: ${({ theme }) => theme.star};

    @media only screen and (max-width: 35em) {
      font-size: 1.4rem;
    }
  }
`;

const Rating = styled.span``;

CardReview.propTypes = {
  reviewLabel: PropTypes.string,
  ratingsAverage: PropTypes.number,
  ratingsQuantity: PropTypes.number,
};

export default CardReview;
