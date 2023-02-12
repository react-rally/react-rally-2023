import React from 'react';
import Person from 'components/Person';
import shuffle from 'helpers/shuffle';
import { useAppContext } from "App";

export default () => {
  const { speakers } = useAppContext();

  return (
    <div className="Speakers">
      <div className="align-center">
        {Object.keys(speakers).length > 0 ? (
          shuffle(Object.keys(speakers)).map(key => (
            <Person {...speakers[key]} key={key} />
          ))
        ) : (
          <section className="highlight">
            <p>
              We haven't selected any speakers yet. Why not check out this
              adorable{' '}
              <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
                cat video
              </a>{' '}
              while you wait?
            </p>
          </section>
        )}
      </div>
    </div>
  );
};
