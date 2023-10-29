import styled from 'styled-components';
import { FC } from 'react';

import { FormErrorProps } from '@/types';

const FormError: FC<FormErrorProps> = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

const ErrorMessage = styled.span`
  font-size: 1.3rem;
  color: var(--clr-secondary-red);
  margin-top: 1px;
`;

export default FormError;
