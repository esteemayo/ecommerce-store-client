import styled from 'styled-components';
import { FC } from 'react';

import { UploadProgressProps } from '@/types';

interface ISpan {
  type?: boolean;
}

const UploadProgress: FC<UploadProgressProps> = ({ type, percentage }) => {
  return <Container type={type}>Uploading: {percentage}%</Container>;
};

const Container = styled.span<ISpan>`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  margin-top: ${({ type }) => !type && '2rem'};
`;

export default UploadProgress;
