import PropTypes from 'prop-types';

import Statistic from 'components/Statistic/Statistic';
import { Section, StatList, Title } from './Statistics.styled';

const Statistics = ({ title, data }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map(({ id, label, percentage }) => (
          <Statistic key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </Section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};
