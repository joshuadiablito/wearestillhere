import React, { useState } from 'react';

import Context from '~/context/StoreContext';

import stories from './stories';

const ContextProvider = ({ children }) => {
  let initialStoreState = {
    stories,
  };

  const [store] = useState(initialStoreState);

  console.log({ store });

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
