import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  name: '',
  setName: () => {},
});

export function UserProvider({ children }) {
  const [name, setName] = useState('Romain');

  function updateName(newName) {
    // Version améliorée de setName
    setName(newName);
  }

  return (
    <UserContext.Provider value={{ name, setName: updateName }}>
      {children}
    </UserContext.Provider>
  );
}
