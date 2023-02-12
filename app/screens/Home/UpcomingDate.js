import React from 'react';
import moment from 'moment';
import cx from 'classnames';

export default ({timestamp, description}) => {
  const date = moment.utc(timestamp);
  const isAfter = moment.utc().isAfter(date);
  const iconSource = `assets/dist/img/icons/calendar${
    isAfter ? '-complete' : ''
  }.svg`;

  return (
    <div
      className={cx({
        Home__UpcomingDate: true,
        'Home__UpcomingDate--disabled': isAfter,
      })}>
      <img alt="" src={iconSource} />
      <div>
        <time>{date.format('MMMM D, YYYY')}</time>
        <small>{description}</small>
      </div>
    </div>
  );
};
