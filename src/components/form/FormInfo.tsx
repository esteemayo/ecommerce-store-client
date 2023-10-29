import styled from 'styled-components';
import { FC } from 'react';
import Link from 'next/link';

import { FormInfoProps } from '@/types';

const FormInfo: FC<FormInfoProps> = ({ url, text, label }) => {
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

export default FormInfo;
