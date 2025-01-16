import { useRef, ReactNode, FC } from 'react';
import { ScrollContext } from '../contexts';

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: FC<ScrollProviderProps> = ({ children }) => {
  const aboutUsRef = useRef<HTMLElement | null>(null);
  const contactUsRef = useRef<HTMLElement | null>(null);

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider
      value={{ aboutUsRef, scrollToAboutUs, contactUsRef, scrollToContactUs }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
