import React from 'react';
import cx from 'classnames';
import moment from 'moment';
import Avatar from 'components/Avatar';
import constants from 'helpers/constants';
import DateUtils from 'helpers/DateUtils';
import scheduleInterval from 'helpers/scheduleInterval';
import ScheduleData from '../../../api/schedule';
import SpeakerData from '../../../api/speakers';

const CONF_DAY_ONE_DATE = moment.utc(constants.Dates.CONF_DAY_ONE);
const CONF_DAY_TWO_DATE = moment.utc(constants.Dates.CONF_DAY_TWO);

function parseTimeString(str) {
  if (!str) return [];

  const parts = str.match(/(\d+)\:(\d+) (am|pm)/i);
  let hours = parseInt(parts[1], 10);
  const minutes = parseInt(parts[2], 10);
  const period = parts[3];

  // Convert to 24 hour time
  if (period.toLowerCase() === 'pm' && hours !== 12) {
    hours += 12;
  }

  return [hours, minutes];
}

function isNowWithinTimeRange(date, startTime, endTime) {
  const OFFSET = 6;
  const [startHour, startMinute] = parseTimeString(startTime);
  const [endHour, endMinute] = parseTimeString(endTime);

  let start = moment
    .utc(date)
    .hour(startHour + OFFSET)
    .minute(startMinute);
  let end = endTime
    ? moment
        .utc(date)
        .hour(endHour + OFFSET)
        .minute(endMinute)
    : moment.utc(start).hour(startHour + 3 + OFFSET);

  return moment.utc().isBetween(start, end);
}

const SpeakerAvatar = ({ speakers }) => (
  <div style={{ position: "relative", left: 20 * (speakers.length - 1), whiteSpace: "nowrap" }}>
    {speakers.map(({ avatar }, i) => (
      <Avatar
        key={avatar}
        url={avatar}
        size={55}
        style={{
          position: "relative",
          left: -20 * i
        }}
      />
    ))}
  </div>
);

const getSessionSpeakers = (speaker) => {
  if (!speaker) return null;

  const speakers = Array.isArray(speaker) ? speaker : [speaker];

  return speakers.map((s) => SpeakerData[s]);
}

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Default showing day two schedule if day two is today
      // TODO this isn't working since switching to moment
      selectedDay: moment.utc().isSame(CONF_DAY_TWO_DATE, 'day')
          ? 'dayTwo'
          : 'dayOne'
    };
  }

  componentDidMount() {
    this.cancelInterval = scheduleInterval(
      this.forceUpdate.bind(this),
      5 * DateUtils.MINUTES,
    );
    this.scrollToActiveSession();
  }

  componentWillUnmount() {
    if (typeof this.cancelInterval === 'function') {
      this.cancelInterval();
      this.cancelInterval = null;
    }
  }

  componentDidUpdate() {
    this.scrollToActiveSession();
  }

  scrollToActiveSession() {
    const activeElement = document.querySelector('.Schedule__Session--active');

    if (activeElement && activeElement !== this.activeElement) {
      this.activeElement = activeElement;

      if (activeElement.scrollIntoView) {
        // Set timeout to run after window.scrollTo being called from onUpdate in Router
        setTimeout(() => {
          activeElement.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
          });
        }, 500);
      }
    }
  }

  renderMenu() {
    return (
      <menu className="Schedule__Menu">
        <a
          href="javascript://"
          onClick={this.handleMenuItemClick.bind(this, 'dayOne')}
          className={cx('Schedule__Menu__Item', {
            'Schedule__Menu__Item--active': this.state.selectedDay === 'dayOne',
          })}>
          {CONF_DAY_ONE_DATE.format('dddd, MMMM D')}
        </a>
        <a
          href="javascript://"
          onClick={this.handleMenuItemClick.bind(this, 'dayTwo')}
          className={cx('Schedule__Menu__Item', {
            'Schedule__Menu__Item--active': this.state.selectedDay === 'dayTwo',
          })}>
          {CONF_DAY_TWO_DATE.format('dddd, MMMM D')}
        </a>
      </menu>
    );
  }

  render() {
    let selectedDay =
      this.state.selectedDay === 'dayOne'
        ? CONF_DAY_ONE_DATE
        : CONF_DAY_TWO_DATE;
    let schedule = ScheduleData[this.state.selectedDay];

    return (
      <div className="Schedule">
        {/*
        <section className="highlight">Times are in <a href="https://www.thetimezoneconverter.com/" target="_blank">Mountain Time</a>.</section>
        */}

        {schedule.length > 0 ? (
          <div>
            {this.renderMenu()}
            {schedule.map((session, i) => {
              const sessionSpeakers = getSessionSpeakers(session.speaker);

              let sessionEnd = schedule[i + 1] ? schedule[i + 1].time : null;
              let isActive =
                moment.utc().isSame(selectedDay, 'day') &&
                isNowWithinTimeRange(selectedDay, session.time, sessionEnd);

              return (
                <div
                  className={cx('Schedule__Session', {
                    'Schedule__Session--active': isActive,
                    'Schedule__Session--speaker': sessionSpeakers,
                    'Schedule__Session--description': session.description,
                  })}
                  key={i}>
                  <time>{session.time}</time>
                  <div className="Schedule__Session__Description">
                    {sessionSpeakers ? (
                      <div>
                        <h4>{session.title}</h4>
                        <em>{sessionSpeakers.map(({ name }) => name).join(", ")}</em>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: (session.description || '').replace(
                              /\n/g,
                              '<br/>',
                            ),
                          }}
                        />
                      </div>
                    ) : (
                      <div>
                        <h4>{session.title}</h4>
                        <p>{session.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="Schedule__Session__Avatar">
                    {sessionSpeakers && <SpeakerAvatar speakers={sessionSpeakers} />}
                  </div>
                </div>
              );
            })}
            {this.renderMenu()}

            <p>
              Please note that this schedule is tentative and subject to change.
            </p>
          </div>
        ) : (
          <div className="align-center">
            <section className="highlight">
              <p>
                We will post the schedule once all proposals have been submitted
                and reviewed. Stay tuned!
              </p>
            </section>
          </div>
        )}
      </div>
    );
  }

  handleMenuItemClick(selectedDay) {
    this.setState(
      {
        selectedDay,
      },
      () => {
        let el = document.querySelector('.Schedule');
        let rect = el.getBoundingClientRect();

        if (rect.top < 0 && el && typeof el.scrollIntoView === 'function') {
          el.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          });
        }
      },
    );
  }
}
