import React from 'react';
import About from 'components/About';
import Person from 'components/Person';
import shuffle from 'helpers/shuffle';
import { useAppContext } from "App";

export default () => {
  const { constants, organizers } = useAppContext();

  return (
    <div className="About">
      <About />

      <section>
        <h2>Attendee Experience</h2>
        <p>
          As an attendee of {constants.Meta.CONFERENCE_NAME} you will enjoy two full days of talks where you will learn and keep your React knowledge current. You will also have built-in downtime throughout the day so you can discuss what you're learning with other developers, spend time catching up with old friends, or find opportunities to meet new friends. You will be provided with catered breakfast, and you will receive a gift card for lunch so that you can go out and explore Salt Lake City and enjoy some of the local fare. At the end of the day you can unwind and enjoy karaoke, dessert, board games, live music, or lawn games at the conference after parties held each evening.
        </p>
      </section>
    
      <section>
        <h2>Organizers</h2>
        <div className="align-center">
          {shuffle(Object.keys(organizers)).map(key => {
            return <Person {...organizers[key]} key={key} />;
          })}
        </div>
      </section>
    
      <section>
        <h2>Past Conferences</h2>
        <p>
          We've been having fun, learning, and sharing together for a few years
          now. Here's a look at our past years:
        </p>
        <ul className="link-list">
          <li>
            <a href="https://2015.reactrally.com/" target="_blank">
              2015
            </a>
          </li>
          <li>
            <a href="https://2016.reactrally.com/" target="_blank">
              2016
            </a>
          </li>
          <li>
            <a href="https://2017.reactrally.com/" target="_blank">
              2017
            </a>
          </li>
          <li>
            <a href="https://2018.reactrally.com/" target="_blank">
              2018
            </a>
          </li>
          <li>
            <a href="https://2019.reactrally.com/" target="_blank">
              2019
            </a>
          </li>
          <li>
            <a href="https://2020.reactrally.com/" target="_blank">
              2020
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
