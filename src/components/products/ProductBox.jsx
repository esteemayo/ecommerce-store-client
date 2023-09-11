import styled from 'styled-components';
import PropTypes from 'prop-types';

import { StyledWrapper } from '../StyledWrapper';
import { useSubmenu } from '@/hooks/useSubmenu';

const ProductBox = ({ children }) => {
  const { closeSubmenuHandler } = useSubmenu();

  return (
    <Container onMouseOver={closeSubmenuHandler}>
      <StyledWrapper>{children}</StyledWrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

ProductBox.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProductBox;
