import React, { useState, useEffect } from 'react';

import Context from '~/context/StoreContext';

const ContextProvider = ({ children }) => {
  let initialStoreState = {
    stories: [
      {
        id: '',
        title: '',
        href: '',
        shortDescription: '',
      },
    ],
  };

  const [store, updateStore] = useState(initialStoreState);

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
export default ContextProvider;
