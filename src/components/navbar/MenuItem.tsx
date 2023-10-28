'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuItem = ({ label, onMouse }) => {
  return (
    <ListItem>
      <Button
        type='button'
        className='link-btn'
        onMouseOver={onMouse}
      >
        {label}
      </Button>
    </ListItem>
  );
};

const ListItem = styled.li``;

const Button = styled.button`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: capitalize;
  background-color: transparent;
  color: ${({ theme }) => theme.textNav};
  outline-color: var(--clr-primary-green);
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.5;
  }
`;

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  onMouse: PropTypes.any,
};

export default MenuItem;
