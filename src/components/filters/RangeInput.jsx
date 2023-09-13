import styled from 'styled-components';
import PropType from 'prop-types';

import { Label } from './Label';
import { Filter } from './Filter';

import FormatPrice from '../FormatPrice';

const RangeInput = ({ name, label, price, ...rest }) => {
  return (
    <Filter>
      <Label htmlFor={name}>
        {label} {' '}
        <FormatPrice value={price} />
      </Label>
      <Input
        {...rest}
        id={name}
        name={name}
        type='range'
      />
    </Filter>
  );
}

const Input = styled.input`
  display: inline-block;
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
    width: 26rem;
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

RangeInput.propType = {
  name: PropType.string,
  label: PropType.string,
  price: PropType.number,
  rest: PropType.any,
};

export default RangeInput;
