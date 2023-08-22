import { NumericFormat } from 'react-number-format';

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
