import { FC, useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router';
import { Footer } from '../';
import { cn } from '../../lib/utils';
import { Menu } from 'lucide-react';

export const MainLayout: FC = () => {
  const [menu, setMenu] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

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

  return (
    <>
      <button
        ref={menuBtnRef}
        onClick={() => setMenu(!menu)}
        className="absolute right-4 top-4 z-30"
      >
        <Menu stroke="#fff" />
      </button>
      <div
        className={cn(
          'invisible absolute right-4 top-12 z-50 w-full max-w-56 rounded-lg border-gray-800 bg-gray-400/10 bg-clip-padding opacity-0 backdrop-blur-lg backdrop-contrast-100 backdrop-saturate-100 backdrop-filter transition-all',
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
        <Link to="/" className="block p-2 py-3 text-center text-white">
          Home
        </Link>
        <Link to="/#about-us" className="block p-2 py-3 text-center text-white">
          About Us
        </Link>
        <Link
          to="/#contact-us"
          className="block p-2 py-3 text-center text-white"
        >
          Contact Us
        </Link>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
