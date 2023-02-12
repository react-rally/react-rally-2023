import React, { useEffect, useState } from 'react'
import moment from 'moment'

import DateUtils from 'helpers/DateUtils'

export default ({ date, label }) => {
  const diff = moment.utc(date).diff(moment.utc());

  return (
    <div className="Countdown">
      <small>{label}</small>
      <h2 className="Countdown__Timer">{DateUtils.duration(diff)}</h2>
    </div>
  )
}
