import { NumericFormat } from 'react-number-format';
import { FC } from 'react';

import { FormatPriceProps } from '@/types';

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
