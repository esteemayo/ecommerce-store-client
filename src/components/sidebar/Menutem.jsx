'use client';

import styled from 'styled-components';
import Link from 'next/link';

const Menutem = ({ url, icon, label }) => {
  return (
    <ListItem>
      <Link href={url} passHref>
        {icon}
        &nbsp;
        {label}
      </Link>
    </ListItem>
  );
}

const ListItem = styled.li`
  font-size: 1.4rem;
`;

export default Menutem;
