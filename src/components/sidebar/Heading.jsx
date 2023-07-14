'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ title }) => {
  return <Header>{title}</Header>;
}

const Header = styled.h4`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;