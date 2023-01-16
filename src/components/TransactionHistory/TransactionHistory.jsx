import TransactionItem from 'components/TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import { TableHead } from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
