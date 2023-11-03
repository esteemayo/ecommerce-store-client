'use client';

import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

import { announcements } from '@/data';
import { useSubmenu } from '@/hooks/useSubmenu';

const Announcement = () => {
  const closeSubmenu = useSubmenu((state) => state.closeSubmenu);

  return (
    <Container onMouseOver={closeSubmenu}>
      <Marquee speed={100} gradient>
        <Wrapper>
          {announcements.map((item) => {
            const { id, title } = item;
            return <Text key={id}>{title}</Text>;
          })}
        </Wrapper>
      </Marquee>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  padding: 1rem 6rem;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: inherit;
`;

export default Announcement;
