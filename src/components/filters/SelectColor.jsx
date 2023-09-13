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

SelectColor.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  rest: PropTypes.any,
};

export default SelectColor;
