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
`;

export default MenuItem;
