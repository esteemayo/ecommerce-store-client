'use client';

import styled from 'styled-components';

const Heading = ({ title, small }) => {
  return <Header small={small}>{title}</Header>;
}

const Header = styled.h4`
  font-weight: ${({ small }) => small ? '300' : '500'};
  font-size: ${({ small }) => small ? '1.4rem' : '2rem'};
`;

export default Heading;
