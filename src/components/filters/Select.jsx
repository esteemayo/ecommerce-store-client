import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Label } from './Label';
import { Filter } from './Filter';

const Select = ({ name, type, label, value, ...rest }) => {
  return (
    <Filter>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name} type={type}>
        {value}
      </StyledSelect>
    </Filter>
  );
}

const StyledSelect = styled.select`
  display: inline-block;
  text-transform: capitalize;
  width: 20rem;
  padding: 3px;
  font-family: inherit;
  font-size: 1.4rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textFilterSelect};
  border: 1px solid #ddd;
  border-radius: 3px;
  outline-color: ${({ theme }) => theme.filterOut};

  @media only screen and (max-width: 37.5em) {
    width: ${({ type }) => type === 'product' ? '26rem' : '60rem'};
    padding: ${({ type }) => type !== 'product' && '0.7rem'};
  }

  @media only screen and (max-width: 35em) {
    width: ${({ type }) => type !== 'product' && '54rem'};
  }

  @media only screen and (max-width: 31.25em) {
    width: 40rem;
  }

  @media only screen and (max-width: 25em) {
    width: 39rem;
  }

  @media only screen and (max-width: 21.875em) {
    width: 37rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 31rem;
  }
`;

Select.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  rest: PropTypes.any,
};

export default Select;
