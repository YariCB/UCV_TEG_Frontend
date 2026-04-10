import React, { createContext, useState, useEffect } from 'react';

export const SidebarContext = createContext({
  isExpanded: false,
  setExpanded: () => {},
  toggle: () => {},
});

export function SidebarProvider({ children }) {
  const STORAGE_KEY = 'app.sidebarExpanded';
  const [isExpanded, setIsExpanded] = useState(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw === 'true';
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, isExpanded ? 'true' : 'false');
    } catch (e) {
      // ignore
    }
  }, [isExpanded]);

  const toggle = () => setIsExpanded(prev => !prev);

  return (
    <SidebarContext.Provider value={{ isExpanded, setExpanded: setIsExpanded, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContext;
