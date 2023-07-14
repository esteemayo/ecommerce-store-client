'use client';

import styled from 'styled-components';

const Heading = ({ title }) => {
  return <Header>{title}</Header>;
}

const Header = styled.h4`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.6rem;
`;

export default Heading;
