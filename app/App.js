import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

import constants from 'helpers/constants';
import organizers from '../api/organizers';
import schedule from '../api/schedule';
import speakers from '../api/speakers';
import sponsors from '../api/sponsors';
import tickets from '../api/tickets';

const AppContext = React.createContext({});
export const useAppContext = () => React.useContext(AppContext);

export default props => {
  return (
    <AppContext.Provider
      value={{
        constants,
        organizers,
        schedule,
        speakers,
        sponsors,
        tickets,
      }}
    >
      <div>
        <Header />
        <main className="Content">{props.children}</main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};
