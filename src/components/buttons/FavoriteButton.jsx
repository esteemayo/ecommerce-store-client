import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconButton } from './IconButton';

const FavoriteButton = () => {
  return (
    <IconButton>
      <FontAwesomeIcon icon={faStar} />
      Add to favorites
    </IconButton>
  );
}

export default FavoriteButton;
