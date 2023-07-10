'use client';

import styled from 'styled-components';

const ToggleButton = ({ icon: Icon, onClick }) => {
  return (
    <Button type='button' onClick={onClick}>
      <Icon />
    </Button>
  );
}

const Button = styled.button`
  display: inline-block;
  border: none;
  width: 4rem;
  height: 4rem;
`;

export default ToggleButton;
