import React from 'react';
import PropTypes from 'prop-types';
import { TableData } from './Transactionitem.styled';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
