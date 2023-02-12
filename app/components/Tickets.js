import React, {Component} from 'react';
import moment from 'moment';

import constants from 'helpers/constants';
import Button from 'components/Button';
import Countdown from 'components/Countdown';

// Calculate release time
let TICKET_RELEASE_TIME;
const EARLY_BIRD_ONE = moment.utc(constants.Dates.TICKET_RELEASE);
const EARLY_BIRD_TWO = EARLY_BIRD_ONE.clone().add(7, 'days');
const STANDARD = EARLY_BIRD_ONE.clone().add(14, 'days');

if (moment.utc().isBefore(EARLY_BIRD_ONE)) {
  TICKET_RELEASE_TIME = EARLY_BIRD_ONE;
} else if (moment.utc().isBefore(EARLY_BIRD_TWO)) {
  TICKET_RELEASE_TIME = EARLY_BIRD_TWO;
} else {
  TICKET_RELEASE_TIME = STANDARD;
}

export default class Tickets extends Component {
  componentWillUnmount() {
    clearTimeout(this.__timer);
  }

  render() {
    const ticketsAvailable = moment.utc().isSameOrAfter(TICKET_RELEASE_TIME);

    if (!ticketsAvailable) {
      this.__timer = setTimeout(this.forceUpdate.bind(this), 1000);
    }

    return (
      <div className="Tickets">
        {ticketsAvailable ? (
          <Button href={constants.Links.TICKET_SALES} className="large">
            Buy Tickets
          </Button>
        ) : (
          <Countdown
            date={TICKET_RELEASE_TIME}
            label={`Tickets on sale ${TICKET_RELEASE_TIME.format(
              'MMMM DD, YYYY',
            )}...`}
          />
        )}
      </div>
    );
  }
}
