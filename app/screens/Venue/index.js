import React from 'react';
import moment from 'moment';
import Button from 'components/Button';
import { useAppContext } from "App";

// TODO new map images
export default () => {
  const { constants } = useAppContext();

  return (
    <div className="Venue">
      <section>
        <h2>
          {constants.Venue.Hotel.NAME}
          <br />
          <small>{constants.Venue.Hotel.ADDRESS}</small>
        </h2>
        <div className="Venue__Details">
          <div className="Venue__Details__Mapbox">
            <a href={constants.Links.VENUE_DIRECTIONS} aria-label="Map directions to venue." target="_blank">
              <img src="assets/dist/img/Sheraton_Map.png" alt="" width="400" />
            </a>
            <div className="Venue__Details__Mapbox__Address">
              <strong>{constants.Venue.Hotel.NAME}</strong>
              <small>{constants.Venue.Hotel.ADDRESS}</small>
            </div>
            <Button
              href={constants.Links.HOTEL_RESERVATION}
              className="primary">
              Book a Room
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button href={constants.Links.VENUE_DIRECTIONS}>
              Get Directions
            </Button>
          </div>
          <div className="Venue__Details__Description">
            <p>
              {constants.Venue.Hotel.DESCRIPTION}
            </p>
            <p>
              We have arranged a group discount with {constants.Venue.Hotel.NAME} for
              attendees of {constants.Meta.EVENT_NAME}. Rooms are available for $
              {constants.Prices.HOTEL_RATE} per night. This discounted rate is
              only available until{' '}
              {moment.utc(constants.Dates.HOTEL_DISCOUNT).format('MMMM Do')} and
              there are a limited number of rooms available, so book your room
              early.
            </p>
          </div>
        </div>
      </section>

      {/*
      <section>
        <h2>The Afterparty</h2>
        <div className="Venue__Details">
          <div className="Venue__Details__Mapbox">
            <a href={constants.Links.PARTY_DIRECTIONS} aria-label="Map directions to after party." target="_blank">
              <img src="assets/dist/img/Gateway_Map.png" alt="" width="400" />
            </a>
            <div className="Venue__Details__Mapbox__Address">
              <strong>{constants.Venue.Party.NAME}</strong>
              <small>
                {constants.Venue.Party.ADDRESS}
              </small>
            </div>
            <Button href={constants.Links.PARTY_DIRECTIONS}>
              Get Directions
            </Button>
          </div>
          <div className="Venue__Details__Description">
            <p>
              {constants.Venue.Party.DESCRIPTION}
            </p>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};
