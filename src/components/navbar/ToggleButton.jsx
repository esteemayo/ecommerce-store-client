'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = () => {
  const dispatch = useDispatch();

  return (
    <Button type='button'>
      <FontAwesomeIcon icon={faBars} />
    </Button>
  );
}

const Button = styled.button`
  
`;

export default ToggleButton;
