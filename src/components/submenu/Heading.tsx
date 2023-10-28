'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ title }) => {
  return <Header>{title}</Header>;
}

const Header = styled.h4`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
