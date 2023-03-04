import React, { Component, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router';
import moment from 'moment';
import DateUtils from 'helpers/DateUtils';
import Button from 'components/Button';
import Countdown from 'components/Countdown';
import Tickets from 'components/Tickets';
import Icon from 'components/Icon';
import { useAppContext } from "App";

const HomeHeader = () => {
  const { constants } = useAppContext();
  
  const CONF_DATES_DISPLAY = constants.Dates.CONF_DAY_ONE === constants.Dates.CONF_DAY_TWO ?
    moment.utc(constants.Dates.CONF_DAY_ONE).format('MMMM D, YYYY') :
    (
      moment.utc(constants.Dates.CONF_DAY_ONE).format('MMMM D') +
      '-' +
      moment.utc(constants.Dates.CONF_DAY_TWO).format('D, YYYY')
    );


  const isOpportunityScholarshipAvailable = moment
    .utc()
    .isBetween(
      moment.utc(constants.Dates.OPPORTUNITY_SCHOLARSHIP_OPEN),
      moment.utc(constants.Dates.OPPORTUNITY_SCHOLARSHIP_CLOSE),
    );
  const isConferenceLive = moment
    .utc()
    .isSameOrAfter(moment.utc(constants.Dates.CONF_DAY_ONE));
  const isHotelAvailable = false; //!isConferenceLive;
  const isCFPOpen = moment
    .utc()
    .isBetween(
      moment.utc(constants.Dates.CFP_OPEN),
      moment.utc(constants.Dates.CFP_CLOSE),
    );

  return (
    <div className="Home__Header">
      <div className="Home__Header__Wrapper">
        <img
          src="assets/dist/img/ReactRallyLogo.png"
          alt="React Rally logo"
          className="Home__Header__Logo"
        />
        <div className="Home__Header__Content">
          <h1>{constants.Meta.EVENT_NAME}</h1>
          <h2>{CONF_DATES_DISPLAY}</h2>
          <p>
            React Rally is a community conference about React and topics
            interesting to React developers. We focus on a friendly, welcoming
            atmosphere, engaging talks from new and established speakers, and
            plenty of hallway-track time to chat with interesting people.
          </p>
          <div className="Home__Header__Buttons">
            {isConferenceLive ? (
              <Link to="/stream" className="Button primary large">
                Watch Live Stream
              </Link>
            ) : false ? (
              <Countdown
                date={new Date(
                  Date.parse(constants.Dates.CONF_DAY_ONE) +
                    DateUtils.HOURS * 9,
                ).toISOString()}
                label="Live stream coming soon"
              />
            ) : (
              <span>
                <Tickets />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {isCFPOpen && (
                  <span>
                    <Button
                      href={constants.Links.PROPOSAL_FORM}
                      className="large primary">
                      Submit Proposal
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                )}
                {isOpportunityScholarshipAvailable && (
                  <span>
                    <Button
                      href={constants.Links.OPPORTUNITY_SCHOLARSHIP_FORM}
                      className="large">
                      Apply For Scholarship
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </span>
            )}
            {isHotelAvailable && (
              <Button
                href={constants.Links.HOTEL_RESERVATION}
                className="large transparent">
                Book Hotel
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ onMenuClick = () => {} }) => {
  const { constants } = useAppContext();

  const NavLink = useMemo(() => ({ children, to }) => {
    return (
      <Link
        activeClassName="active"
        to={to}
        onClick={() => onMenuClick(false)}
      >
        {children}
      </Link>
    )
  }, [onMenuClick]);

  return (
    <div className="Header__Nav">
      <section className="Header__Nav__Menu">
        <Link
          to="/"
          id="logo"
          aria-label="Home"
          onClick={() => onMenuClick(false)}>
          <img
            src="assets/dist/img/ReactLogo.svg"
            alt="React logo."
            width="44"
            height="44"
          />
        </Link>
        <ul>
          <li>
            <NavLink to="/speakers">Speakers</NavLink>
          </li>
          <li>
            <NavLink to="/schedule">Schedule</NavLink>
          </li>
          <li>
            <NavLink to="/workshop">Workshop</NavLink>
          </li>
          <li>
            <NavLink to="/venue">Venue</NavLink>
          </li>
          <li>
            <NavLink to="/sponsors">Sponsors</NavLink>
          </li>
          <li>
            <NavLink to="/conduct">Conduct</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </section>
      <section className="Header__Nav__Social">
        {/*
        <Icon href="https://twitter.com/ReactRally" type="twitter" />
        <Icon href="https://github.com/react-rally" type="github" />
        <Icon href="https://instagram.com/reactrally" type="instagram" />
        <Icon href="https://www.youtube.com/channel/UCXBhQ05nu3L1abBUGeQ0ahw" type="youtube" />
        */}
        <Button href={constants.Links.TICKET_SALES} className="medium">
          Tickets
        </Button>
      </section>
      <button className="Header__Nav__Button" onClick={() => onMenuClick()}>
        <div className="Header__Nav__Button__Hamburger" />
        <div className="Header__Nav__Button__X">&times;</div>
      </button>
    </div>
  );
};

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  render() {
    const isHomeScreen = this.context.router.isActive('/', true);
    const {isMenuOpen} = this.state;

    return (
      <header
        className={cx('Header', {
          Header__Home: isHomeScreen,
          'Header--menuOpen': isMenuOpen,
        })}>
        <Navigation
          onMenuClick={isOpen => {
            if (typeof isOpen === 'undefined') {
              isOpen = !isMenuOpen;
            }
            this.setState({isMenuOpen: isOpen});
          }}
        />
        {isHomeScreen && <HomeHeader />}
      </header>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object,
};
