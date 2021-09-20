import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import Context from '~/context/StoreContext';
import CookiePolicy from '../components/CookiePolicy';
import stories from './stories';

const ContextProvider = ({ children }) => {
  let initialStoreState = {
    stories,
  };

  const [store] = useState(initialStoreState);
  const cookiePolicy = Cookies.get('cookie-policy') === 'true';

  return (
    <Context.Provider
      value={{
        store,
      }}
    >
      <React.Fragment>
        {children}
        {!cookiePolicy && <CookiePolicy />}
      </React.Fragment>
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
