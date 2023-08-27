import styled from 'styled-components';
import Link from 'next/link';

const AuthInfo = () => {
  return (
    <RegisterContainer>
      <RegisterText>
        Don&apos;t have an account? {' '}
        <Link href='/register' passHref>Sign up</Link>
      </RegisterText>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  margin-top: 3rem;
`;

const RegisterText = styled.p`
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

export default AuthInfo;
