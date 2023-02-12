const constants = {};
export default constants;

constants.Meta = {
  EVENT_NAME: "React Rally",
  CONFERENCE_NAME: "React Rally",
};

constants.Links = {
  CODE_OF_CONDUCT: 'http://confcodeofconduct.com/',
  CODE_OF_CONDUCT_FORM: 'https://docs.google.com/forms/d/e/1FAIpQLScghazbFL90gtVbWjlE2BxwXGuV-S1IIXGyXqeU9lyLAA7NmQ/viewform',
  EMAIL_ORGANIZERS: 'team@reactrally.com',
  TICKET_SALES: 'https://ti.to/react-rally/react-rally-2023',
  PROPOSAL_FORM: 'https://sessionize.com/react-rally-2023',
  HOTEL_RESERVATION:
    'https://www.marriott.com/meetings/preferred-payment-method.mi?CustEmAdd=shyloh%40zeroslopeevents.com&OptyId=M-P10SJ9N&Event=React%20Rally%202023&ADate=15-AUG-23&DDate=18-AUG-23&SfaEmAdd=sylvia.lebron%40saltlakemarriottdowntown.com&PropCode=SLCUT&QuoteId=M-P10SJ9N',
  VENUE_DIRECTIONS: 'https://goo.gl/maps/26iT97pXY2pZztis9',
  PARTY_DIRECTIONS: 'https://goo.gl/maps/AeYKJrkAFZG2',
  LIVE_STREAM_PLACEHOLDER: 'https://www.youtube.com/embed/5NNOrp_83RU',
  LIVE_STREAM_DAY_ONE: 'https://www.youtube.com/embed/IRSjD2A1VuA',
  LIVE_STREAM_DAY_TWO: 'https://www.youtube.com/embed/8dKljTMDGu0',
  LIVE_STREAM_OVER: 'https://www.youtube.com/embed/T1XgFsitnQw',
  YOUTUBE_CHANNEL:
  'https://www.youtube.com/playlist?list=PLUD4kD-wL_zYSfU3tIYsb4WqfFQzO_EjQ',
  // TODO Final Prospectus
  SPONSOR_PROSPECTUS: 'docs/sponsor.pdf',
  OPPORTUNITY_SCHOLARSHIP_FORM:
    'https://docs.google.com/forms/d/e/1FAIpQLSevXCteBpBysq8afjuHQuFL4sx3OUv3o2iIciQ6sMCfCk12uw/viewform',
};

constants.Venue = {};
constants.Venue.Hotel = {
  NAME: "Salt Lake Marriott Downtown at City Creek",
  ADDRESS: "75 S W Temple St, Salt Lake City, UT 84101",
  DESCRIPTION: "Salt Lake Marriot is a world class hotel located in the heart of the downtown business and entertainment district."
};
constants.Venue.Party = {
  NAME: "The Gateway",
  ADDRESS: "10 North Rio Grande Street, Salt Lake City, UT, 84101",
  DESCRIPTION: "Join us after the conference on Friday for dinner, dessert, lawn games, and live music. Be there!"
};

constants.Prices = {
  HOTEL_RATE: 189,
};

constants.Dates = {
  CFP_OPEN: '2023-03-01T06:00:00-00:00',
  CFP_CLOSE: '2023-03-31T06:00:00-00:00',
  TICKET_RELEASE: '2023-04-19T18:00:00-00:00',
  CONF_DAY_ONE: '2023-08-17T06:00:00-00:00',
  CONF_DAY_TWO: '2023-08-18T06:00:00-00:00',
  HOTEL_DISCOUNT: '2023-07-25T06:00:00-00:00',
  OPPORTUNITY_SCHOLARSHIP_OPEN: '2023-01-01T06:00:00-00:00',
  OPPORTUNITY_SCHOLARSHIP_CLOSE: '2023-01-01T06:00:00-00:00',
};

constants.FeatureSets = {};
constants.FeatureSets.Sponsors = {
  features: [
    { id: 0, name: 'Logo on conference website' },
    { id: 1, name: 'Logo on slide between talks' },
    { id: 2, name: 'Booth at conference' },
    { id: 3, name: 'Sponsor an activity during a break' },
    { id: 4, name: 'Sponsor lunch gift cards' },
    { id: 5, name: 'Logo on stage' },
    { id: 6, name: 'Logo on podium' },
    { id: 7, name: 'Official sponsor of after party' },
    { id: 8, name: 'Logo on lanyard (sponsor to supply lanyards)' },
  ],
  levels: [
    { name: 'Silver', price: 5000, quantity: 10, tickets: 1, features: [0, 1] },
    { name: 'Gold', price: 10000, quantity: 5, tickets: 2, features: [0, 1, 2] },
    { name: 'Platinum', price: 15000, quantity: 5, tickets: 4, features: [0, 1, 2, 3, 4, 5] },
    { name: 'Premier', price: 25000, quantity: 1, tickets: 6, features: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
  ],
};
