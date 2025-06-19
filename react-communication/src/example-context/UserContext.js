import { createContext } from 'react';

const UserContext = createContext({
  name: '',
  setName: () => {
    throw new Error('UserContext was not provided');
  },
});

export default UserContext;
