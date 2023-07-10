'use client';

import styled from 'styled-components';

const Heading = ({ title, small }) => {
  return <Header small={small}>{title}</Header>;
}

const Header = styled.h4`
  
`;

export default Heading;
