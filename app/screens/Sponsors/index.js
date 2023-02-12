import React from 'react';
import Button from 'components/Button';
import Features from 'components/Features';
import { useAppContext } from "App";

export default () => {
  const { constants, sponsors } = useAppContext();

  return (
    <div className="Sponsors">
      <section className="highlight">
        <p>
          A huge thank you to our fine sponsors. If you're interested in
          supporting React Rally, take a look at our prospectus and get in
          touch.
        </p>
        <br />
        <Button href={constants.Links.SPONSOR_PROSPECTUS} className="primary">
          Download Prospectus
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button href={`mailto:${constants.Links.EMAIL_ORGANIZERS}`}>Get in Touch</Button>
      </section>

      {Object.keys(sponsors)
        .filter(level => sponsors[level].length > 0)
        .map(level => {
          return (
            <section key={level}>
              <h2>{level}</h2>
              <div className="Sponsors__Logos">
                {sponsors[level].map((sponsor, i) => {
                  return sponsor.image ? (
                    <a
                      key={i}
                      href={sponsor.url}
                      target="_blank"
                      title={sponsor.name}>
                      <img
                        src={sponsor.image}
                        style={sponsor.style}
                        alt={sponsor.name}
                      />
                    </a>
                  ) : (
                    <a key={i} href={sponsor.url} target="_blank">
                      {sponsor.name}
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}

      <section>
        <h2>Sponsor Levels</h2>
        <Features featureSet={constants.FeatureSets.Sponsors} />
      </section>
    </div>
  );
};
