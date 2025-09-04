"use client";

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from "react";

type SessionContextProviderProps = {
  children: React.ReactNode;
};

type SessionContextType = {
  activeSection: SectionName | undefined;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName | undefined>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  bgIsBlue: boolean;
  setBgIsBlue: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SessionContext =
  createContext<SessionContextType | null>(null);

export default function SessionContextProvider({
  children,
}: SessionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName | undefined>('Projects');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
  const [bgIsBlue, setBgIsBlue] = useState<boolean>(true);

  return (
    <SessionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        bgIsBlue, setBgIsBlue,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSessionContext() {
  const context = useContext(SessionContext);

  if (context === null) {
    throw new Error(
      "useSessionContext must be used within an SessionContextProvider"
    );
  }

  return context;
}