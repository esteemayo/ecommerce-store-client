import PropTypes from 'prop-types';

import { Label } from './Label';
import { StyledSelect } from './StyledSelect';
import { Filter } from './Filter';

const Select = ({ name, type, label, options, ...rest }) => {
  return (
    <Filter>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name} type={type}>
        {options}
      </StyledSelect>
    </Filter>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.any,
  rest: PropTypes.any,
};

export default Select;
