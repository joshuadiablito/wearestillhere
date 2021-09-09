import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Context from '~/context/StoreContext';

import stories from './stories';

const ContextProvider = ({ children }) => {
  let initialStoreState = {
    stories,
  };

  const [store] = useState(initialStoreState);

  return (
    <Context.Provider
      value={{
        store,
      }}
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
