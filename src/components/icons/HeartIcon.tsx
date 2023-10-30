import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { FC } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

interface HeartIconProps {
  isWished: boolean;
}

const HeartIcon: FC<HeartIconProps> = ({ isWished }) => {
  return isWished ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />;
};

export default HeartIcon;
