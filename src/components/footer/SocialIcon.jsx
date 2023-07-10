'use client';

import styled from 'styled-components';

const SocialIcon = ({ data }) => {
  return (
    <Container>SocialIcon</Container>
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
  
`;

export default SocialIcon;
