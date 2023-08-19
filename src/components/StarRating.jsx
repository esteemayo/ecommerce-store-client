import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

const StarRating = ({ value, ...rest }) => {
  return (
    <Rating
      {...rest}
      readOnly
      value={value}
      precision={0.5}
      size='large'
      name='read-only'
    />
  );
}

export default StarRating;
