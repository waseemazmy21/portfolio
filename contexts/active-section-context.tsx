'use client';

import { useState, useContext, createContext } from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<null | ActiveSectionContextType>(
  null
);

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context == null) {
    throw new Error();
  }

  return context;
}

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('home');
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
