'use client';

import styled from 'styled-components';

const Heading = ({ title }) => {
  return (
    <Header>{title}</Header>
  );
}

const Header = styled.h4`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

export default Heading;
