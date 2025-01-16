import { createContext, RefObject } from 'react';

export interface ScrollContextType {
  aboutUsRef: RefObject<HTMLElement>;
  scrollToAboutUs: () => void;
  contactUsRef: RefObject<HTMLElement>;
  scrollToContactUs: () => void;
}

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined,
);
