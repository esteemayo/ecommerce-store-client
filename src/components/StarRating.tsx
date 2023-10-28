import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

const StarRating = ({ value, ...rest }) => {
  return (
    <Rating
      {...rest}
      value={value}
      precision={0.5}
      size='large'
    />
  );
}

StarRating.propTypes = {
  value: PropTypes.number,
  rest: PropTypes.any,
};

export default StarRating;