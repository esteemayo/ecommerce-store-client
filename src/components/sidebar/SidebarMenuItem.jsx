'use client';

import styled from 'styled-components';
import Link from 'next/link';

const SidebarMenuItem = ({ url, icon, label }) => {
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

  & > * {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      color: inherit;
      outline-color: #eee;
      transition: all 0.2s ease;
    }

    &:active {
      color: currentColor;
    }

    &:hover {
      color: #686767;
    }

    svg {
      color: var(--clr-secondary-green);
    }
  }
`;

export default SidebarMenuItem;
