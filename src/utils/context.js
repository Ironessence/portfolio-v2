import { createRef, useContext } from 'react';

const { createContext } = require('react');

const RefContext = createContext();

export const ContextStore = ({ children }) => {
  const projectsRef = createRef(null);
  const skillsRef = createRef(null);
  const aboutRef = createRef(null);
  const contactRef = createRef(null);

  return (
    <RefContext.Provider value={{ skillsRef, projectsRef, aboutRef, contactRef }}>
      {children}
    </RefContext.Provider>
  );
};

export const useRefContext = () => useContext(RefContext);
