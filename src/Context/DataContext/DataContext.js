import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  return (
    <DataContext.Provider value={{ selectedSymbol, setSelectedSymbol}}>
      {children}
    </DataContext.Provider>
  );
};