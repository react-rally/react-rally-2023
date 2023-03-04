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
          Are you a developer looking to stay ahead of the game in the ever-evolving world of React and web tech? Then look no further than {constants.Meta.CONFERENCE_NAME}! Our two-day conference is designed for developers of all backgrounds, from seasoned professionals to those just starting out. With a single track program, you'll be immersed in a variety of exciting presentations that cover a range of topics, including state management, hooks, accessibility, performance, JavaScript, native applications, career growth, and more. Our inclusive conference is a great place to network, learn, and share experiences with like-minded individuals. Don't miss out on this opportunity to take your skills to the next level and be a part of the React community's ongoing evolution. Join us at {constants.Meta.CONFERENCE_NAME}!
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
