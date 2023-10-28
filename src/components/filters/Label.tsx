import styled from 'styled-components';

export const Label = styled.label`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textFilterLabel};
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
`;
