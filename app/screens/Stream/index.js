import React from 'react';
import { getLiveStreamEmbedURL } from 'helpers/livestream';
import { useAppContext } from "App";

export default () => {
  const { constants } = useAppContext();

  return (
    <div className="Stream">
      <iframe
        className="Stream__Embedded"
        width="560"
        height="315"
        src={getLiveStreamEmbedURL()}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <div className="Stream__Caption">
        <img src="assets/dist/img/ReactLogoRed.svg" width="42" />
        <h2>{constants.Meta.CONFERENCE_NAME} Live Stream</h2>
      </div>
      <section className="highlight">
        The content of {constants.Meta.CONFERENCE_NAME} Live Stream is owned solely by the speakers, presenters, musicians, and instructors who have created and recorded the material presented.
        Recording, recreating, or redistributing any content without the explicit consent of the owner is expressly forbidden.
      </section>
    </div>
  );
};
