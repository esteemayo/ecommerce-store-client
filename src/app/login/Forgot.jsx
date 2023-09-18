import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Forgot = ({ url, label }) => {
  return (
    <Container>
      <Link href={url} passHref>{label}</Link>
    </Container>
  );
}

const Container = styled.p`
  font-size: 1.65rem;
  color: ${({ theme }) => theme.textLabel};

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: inherit;
      color: currentColor;
      outline-color: #ddd;
      margin-top: 1rem;
      transition: all 0.3s ease;
    }

    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`;

Forgot.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
};

export default Forgot;
