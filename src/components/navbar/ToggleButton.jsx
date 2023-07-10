'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = () => {
  return (
    <Button type='button'>
      <FontAwesomeIcon icon={faBars} />
    </Button>
  );
}

const Button = styled.button`
  
`;

export default ToggleButton;
