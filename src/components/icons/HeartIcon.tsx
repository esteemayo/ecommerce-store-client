import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import PropTypes from 'prop-types';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const HeartIcon = ({ isWished }) => {
  return isWished ?
    <FavoriteOutlinedIcon /> :
    <FavoriteBorderOutlinedIcon />;
}

HeartIcon.propTypes = {
  isWished: PropTypes.bool,
};

export default HeartIcon;
