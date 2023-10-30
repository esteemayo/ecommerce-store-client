import styled from 'styled-components';
import { FC } from 'react';

import { ProductBox } from '@/types';
import { useSubmenu } from '@/hooks/useSubmenu';

import { StyledWrapper } from '../StyledWrapper';

const ProductBox: FC<ProductBox> = ({ children }) => {
  const closeSubmenu = useSubmenu((state) => state.closeSubmenu);

  return (
    <Container onMouseOver={closeSubmenu}>
      <StyledWrapper>{children}</StyledWrapper>
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

export default ProductBox;
