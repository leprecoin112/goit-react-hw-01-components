import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Statistic.styled';
const Statistic = ({ label, percentage }) => {
  return (
    <Item fileType={label}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

export default Statistic;

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
