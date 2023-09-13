import styled from 'styled-components';
import PropTypes from 'prop-types';

const Option = ({ value }) => {
  return (
    <StyledOption value={value}>
      {value}
    </StyledOption>
  );
}

const StyledOption = styled.option`
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.bgProdCard};
  color: inherit;
`;

Option.propTypes = {
  value: PropTypes.any,
};

export default Option;
