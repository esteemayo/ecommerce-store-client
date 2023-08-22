import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';

const FormatPrice = ({ value }) => {
  return (
    <NumericFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
    />
  );
}

export default FormatPrice;
