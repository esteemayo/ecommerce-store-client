'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { useSidebar } from '@/hooks/useSidebar';

const SidebarMenuItem = ({ url, icon, label }) => {
  const { closeSidebarHandler } = useSidebar();

  return (
    <ListItem>
      <Link href={url} passHref>
        <FontAwesomeIcon icon={icon} />
        &nbsp;
        {label}
      </Link>
    </ListItem>
  );
}

const ListItem = styled.li`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 17.5em) {
    font-size: 1.3rem;
  }

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
      color: ${({ theme }) => theme.textHeader};
    }
  }
`;

SidebarMenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default SidebarMenuItem;
