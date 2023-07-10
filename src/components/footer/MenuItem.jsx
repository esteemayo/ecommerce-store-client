'use client';

import styled from 'styled-components';
import Link from 'next/link';

const MenuItem = ({ url, label }) => {
  return (
    <ListItem>
      <Link href={url} passHref>{label}</Link>
    </ListItem>
  );
}

const ListItem = styled.li`
  
`;

export default MenuItem;
