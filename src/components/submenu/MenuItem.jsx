'use client';

import styled from 'styled-components';

const MenuItem = () => {
  return (
    <ListItem>MenuItem</ListItem>
  );
}

const ListItem = styled.li`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;

  a {
    &:link,
    &:visited {
      text-decoration: none;
      font-weight: 500;
      color: currentColor;
    }

    &:active {
      color: currentColor;
    }
  }
`;

export default MenuItem;
