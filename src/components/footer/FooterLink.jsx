'use client';

import styled from 'styled-components';
import Link from 'next/link';

const FooterLink = ({ data }) => {
  return (
    <LinkContainer>
      {data.map((item) => {
        const { id, url, text } = item;
        return (
          <LinkItem key={id}>
            <Link href={url} passHref>{text}</Link>
          </LinkItem>
        );
      })}
    </LinkContainer>
  );
}

const LinkContainer = styled.ul`
  
`;

const LinkItem = styled.li`
  
`;

export default FooterLink;
