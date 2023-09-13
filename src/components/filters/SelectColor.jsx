import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Label } from './Label';
import Option from './Option';
import { StyledSelect } from './StyledSelect';
import { Filter } from './Filter';

const SelectColor = ({ name, label, options, ...rest }) => {
  return (
    <Filter>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name} >
        {options.map((item) => {
          const { value, text } = item;
          return (
            <Option key={value} value={value}>
              {text}
            </Option>
          );
        })}
      </StyledSelect>
    </Filter>
  );
}

const Select = styled.select`
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
    width: 60rem;
    padding: 0.7rem;
  }

  @media only screen and (max-width: 35em) {
    width: 54rem;
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

SelectColor.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  rest: PropTypes.any,
};

export default SelectColor;
