import {
  FC,
  MouseEvent as ME,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link, Outlet, useNavigate } from 'react-router';
import { Footer } from '../';
import { cn } from '../../lib/utils';
import { Menu } from 'lucide-react';
import { ScrollContext, ScrollContextType } from '../../contexts';

export const MainLayout: FC = () => {
  const [menu, setMenu] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const scrollContext = useContext<ScrollContextType | undefined>(
    ScrollContext,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target as Node)
      ) {
        setMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClick = (e: ME, section: 'about-us' | 'contact-us') => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      if (section === 'about-us') {
        scrollContext!.scrollToAboutUs();
      } else if (section === 'contact-us') {
        scrollContext!.scrollToContactUs();
      }
    }, 100);
  };

  return (
    <>
      <button
        ref={menuBtnRef}
        onClick={() => setMenu(!menu)}
        className="fixed right-4 top-4 z-30"
      >
        <Menu stroke="#fff" />
      </button>
      <div
        className={cn(
          'invisible fixed right-4 top-12 z-50 w-full max-w-56 rounded-lg border-gray-800 bg-gray-400/10 bg-clip-padding opacity-0 backdrop-blur-lg backdrop-contrast-100 backdrop-saturate-100 backdrop-filter transition-all',
          {
            'visible opacity-100': menu,
          },
        )}
      >
        <a
          href="https://panel.hobs.ai"
          target="_blank"
          className="block p-2 py-3 text-center text-white"
        >
          Sign In
        </a>
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0 })}
          className="block p-2 py-3 text-center text-white"
        >
          Home
        </Link>
        <button
          onClick={(e) => handleClick(e, 'about-us')}
          className="block w-full p-2 py-3 text-center text-white"
        >
          About Us
        </button>
        <button
          onClick={(e) => handleClick(e, 'contact-us')}
          className="block w-full p-2 py-3 text-center text-white"
        >
          Contact Us
        </button>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
