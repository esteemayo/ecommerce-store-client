import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const FormInfo = ({ url, text, label }) => {
  return (
    <Container>
      <Text>
        {text} {' '}
        <Link href={url} passHref>{label}</Link>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
`;

const Text = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.textLabel};

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      text-decoration-color: var(--clr-tertiary-green);
      color: var(--clr-tertiary-green);
      outline-color: #ddd;
      transition: all 0.3s ease;
    }

    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--clr-tertiary-green);
      text-underline-offset: 0.4rem;
    }
  }
`;

FormInfo.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormInfo;
