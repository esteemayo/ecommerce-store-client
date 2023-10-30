import { FC } from 'react';
import Rating from '@mui/material/Rating';

interface StarRatingProps {
  value: number;
  name: string;
  readOnly?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>, newValue: number): void
}

const StarRating: FC<StarRatingProps> = ({ value, onChange, ...rest }) => {
  return (
    <Rating 
      {...rest} 
      value={value} 
      precision={0.5} 
      size='large' 
      onChange={onChange}
    />
  );
};

export default StarRating;
