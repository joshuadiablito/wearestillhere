import React, { useState } from 'react';

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
export default ContextProvider;
