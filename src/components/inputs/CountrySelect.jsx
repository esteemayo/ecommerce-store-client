import PropTypes from 'prop-types';

import { FormGroup } from '../form/FormGroup';
import { Label, Option, StyledSelect } from '../form/Select';
import FormError from '../form/FormError';

const CountrySelect = ({
  data,
  name,
  label,
  error,
  ...rest
}) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name}>
        <Option value=''>Select your country</Option>
        {data
          .sort((a, b) => a.flag - b.flag)
          .map((item) => {
            const { flag, label } = item
            return (
              <Option key={flag} value={label}>
                {flag} {label}
              </Option>
            )
          })}
      </StyledSelect>
      {error && <FormError message={error} />}
    </FormGroup>
  );
}

CountrySelect.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.object,
  rest: PropTypes.any,
};

export default CountrySelect;
