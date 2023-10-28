'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return <Heading>{title}</Heading>;
}

const Heading = styled.h1`
  font-family: inherit;
  font-weight: 600;
  font-size: 2.7rem;
  color: ${({ theme }) => theme.textHeader};
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 64em) {
    margin-bottom: 5rem;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 4rem;
    height: 3px;
    background-color: ${({ theme }) => theme.textHeader};
    border-radius: 3px;
  }
`;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
