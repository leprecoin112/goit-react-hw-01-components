import PropTypes from 'prop-types';

import Statistic from 'components/Statistic/Statistic';

const Statistics = ({ title, data }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <Statistic key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};
