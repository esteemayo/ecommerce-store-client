'use client';

import styled from 'styled-components';

const Heading = ({ title, small }) => {
  return <Header small={small}>{title}</Header>;
}

const Header = styled.h4`
  font-weight: 500;
  font-size: 2rem;
`;

export default Heading;
