'use client';

import styled from 'styled-components';
import Link from 'next/link';

const SocialIcon = ({ data }) => {
  return (
    <Container>
      {data.map((item) => {
        const { id, url, icon: Icon, color } = item;
        return (
          <Link key={id} href={url} passHref>
            <IconWrapper color={color}>
              <Icon />
            </IconWrapper>
          </Link>
        )
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 26.875em) {
    margin-top: 0.7rem;
  }
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #${({ color }) => color};
  color: inherit;
`;

export default SocialIcon;
