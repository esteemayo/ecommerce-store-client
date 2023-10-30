import { FC } from 'react';
import Rating from '@mui/material/Rating';

interface StarRatingProps {
  value: number;
  name: string;
  readOnly?: boolean;
}

const StarRating: FC<StarRatingProps> = ({ value, ...rest }) => {
  return <Rating {...rest} value={value} precision={0.5} size='large' />;
};

export default StarRating;
