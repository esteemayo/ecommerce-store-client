import { NumericFormat } from 'react-number-format';
import { FC } from 'react';

interface FormatPriceProps {
  value: number;
}

const FormatPrice: FC<FormatPriceProps> = ({ value }) => {
  return (
    <NumericFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
    />
  );
};

export default FormatPrice;
