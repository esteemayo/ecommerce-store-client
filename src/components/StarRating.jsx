import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

const StarRating = ({ value, ...rest }) => {
  return (
    <Rating
      {...rest}
      value={value}
      precision={0.5}
      size='large'
      name='read-only'
    />
  );
}

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  rest: PropTypes.any,
};

export default StarRating;
