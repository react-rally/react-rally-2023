import React from 'react';
import Button from 'components/Button';
import { useAppContext } from "App";

export default () => {
  const { constants } = useAppContext();

  return (
    <div className="Conduct">
      <section className="highlight">
        <p>
          All attendees, speakers, sponsors and volunteers at our conference are
          required to agree with the following code of conduct. Organizers will
          enforce this code throughout the event. We are expecting cooperation
          from all participants to help ensuring a safe environment for
          everybody.
        </p>
        <p>
          If you have witnessed or been involved in an incident, need help, or
          have questions, please let us know.
        </p>
        <br />
        <Button
          className="primary"
          href={constants.Links.CODE_OF_CONDUCT_FORM}
        >
          Report an Incident
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button href={`mailto:${constants.Links.EMAIL_ORGANIZERS}`}>
          Contact an Organizer
        </Button>
      </section>

      <section>
        <h2>The Quick Version</h2>
        <p>
          Our conference is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, gender identity and
          expression, age, sexual orientation, disability, physical appearance,
          body size, race, or religion (or lack thereof). We do not tolerate
          harassment of conference participants in any form. Sexual language and
          imagery is not appropriate for any conference venue, including talks,
          workshops, parties, Twitter and other online media. Conference
          participants violating these rules may be sanctioned or expelled from
          the conference without a refund at the discretion of the conference
          organisers.
        </p>
      </section>

      <section>
        <h2>The Less Quick Version</h2>
        <p>
          Harassment includes offensive verbal comments related to gender,
          gender identity and expression, age, sexual orientation, disability,
          physical appearance, body size, race, religion, sexual images in
          public spaces, deliberate intimidation, stalking, following, harassing
          photography or recording, sustained disruption of talks or other
          events, inappropriate physical contact, and unwelcome sexual
          attention.
        </p>
        <p>
          Participants asked to stop any harassing behavior are expected to
          comply immediately.
        </p>
        <p>
          Sponsors are also subject to the anti-harassment policy. In
          particular, sponsors should not use sexualised images, activities, or
          other material. Booth staff (including volunteers) should not use
          sexualised clothing/uniforms/costumes, or otherwise create a
          sexualised environment.
        </p>
        <p>
          If a participant engages in harassing behavior, the conference
          organisers may take any action they deem appropriate, including
          warning the offender or expulsion from the conference with no refund.
        </p>
        <p>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact a member of conference
          staff immediately. Conference staff can be identified as they'll be
          wearing branded t-shirts.
        </p>
        <p>
          Conference staff will be happy to help participants contact
          hotel/venue security or local law enforcement, provide escorts, or
          otherwise assist those experiencing harassment to feel safe for the
          duration of the conference. We value your attendance.
        </p>
        <p>
          We expect participants to follow these rules at conference and
          workshop venues and conference-related social events.
        </p>
        <p>
          This Code of Conduct is borrowed from{' '}
          <a href={constants.Links.CODE_OF_CONDUCT} target="_blank">
            Conference Code of Conduct
          </a>
          .
        </p>
      </section>

      <section>
        <h2 id="report">Reporting an Incident</h2>
        <p>
          We want everyone attending React Rally to have a positive, memorable
          experience, The Code of Conduct helps us achieve this by offering
          people a safe, welcoming environment. If you witness or experience a
          violation of the Code of Conduct please report it immediately. You can
          report violations by:
        </p>

        <ul>
          <li>Submit a Code of Conduct <a href={constants.Links.CODE_OF_CONDUCT_FORM} target="_blank">incident report</a>.</li>
          <li>Email the organizer team at {' '}
            <a href={`mailto:${constants.Links.EMAIL_ORGANIZERS}?subject=Code+of+Conduct+Violation`}>
              {constants.Links.EMAIL_ORGANIZERS}
            </a>.
          </li>
          <li>Call us. Please check our Slack for the staff phone number.</li>
        </ul>
        
        <h4>Important Contacts</h4>

        <table>
          <tbody>
            <tr>
              <td>All Emergencies</td>
              <td>
                <a href="tel:911" rel="noopener noreferrer" target="_blank">
                  911
                </a>
              </td>
            </tr>
            <tr>
              <td>Salt Lake City Police Department</td>
              <td>
                <a href="https://goo.gl/maps/qmUiKA3sDCJzT8DC8" target="_blank">
                  475 S 300 E, Salt Lake City, UT 84111
                </a>
              </td>
            </tr>
            <tr>
              <td>Salt Lake City Police Non-Emergency</td>
              <td>
                <a
                  href="tel:+1-(801)-799-3000"
                  rel="noopener noreferrer"
                  target="_blank">
                  +1 (801) 799-3000
                </a>
              </td>
            </tr>
            <tr>
              <td>{constants.Venue.Hotel.NAME}</td>
              <td>
                <a
                  href="tel:+1-(801)-531-0800"
                  rel="noopener noreferrer"
                  target="_blank">
                  +1 (801) 531-0800
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
