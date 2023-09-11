import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
