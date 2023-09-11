import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import PropTypes from 'prop-types';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const WishIcon = ({ isWished }) => {
  return isWished ?
    <FavoriteOutlinedIcon /> :
    <FavoriteBorderOutlinedIcon />;
}

WishIcon.propTypes = {
  isWished: PropTypes.bool,
};

export default WishIcon;
