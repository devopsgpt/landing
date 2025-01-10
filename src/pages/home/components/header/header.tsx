import { Menu } from 'lucide-react';
import { FC, useEffect, useRef, useState } from 'react';
import { cn } from '../../../../lib/utils';

const Header: FC = () => {
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
    <section className="relative h-dvh overflow-hidden bg-background-radial">
      <button
        ref={menuBtnRef}
        onClick={() => setMenu(!menu)}
        className="absolute right-4 top-4 z-20"
      >
        <Menu stroke="#fff" />
      </button>
      <div
        className={cn(
          'invisible absolute right-4 top-12 w-full max-w-56 rounded-lg border-gray-800 bg-gray-400/10 bg-clip-padding opacity-0 backdrop-blur-lg backdrop-contrast-100 backdrop-saturate-100 backdrop-filter transition-all',
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
        <a href="#about-us" className="block p-2 py-3 text-center text-white">
          About Us
        </a>
        <a href="#contact-us" className="block p-2 py-3 text-center text-white">
          Contact Us
        </a>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex h-[66px] items-center justify-center gap-6">
          <div className="h-0.5 w-[88px] rotate-180 bg-Linear" />
          <p className="text-sm text-accent">Devops Solutions</p>
          <div className="h-0.5 w-[88px] bg-Linear" />
        </div>
        <h1 className="bg-accent-linear bg-clip-text text-[64px] font-semibold text-transparent md:text-[128px]">
          Devops GPT
        </h1>
        <div className="flex h-[78px] items-center justify-center">
          <p className="text-center text-lg text-accent">
            From Setup to Scale, We’ve Got You Covered
          </p>
        </div>
        <div className="flex h-[90px] items-start justify-center">
          <a
            href="#our-services"
            className="flex h-[50px] w-[238px] items-center justify-center rounded-lg border border-gray-700 bg-accent-linear-2 px-4 py-2 text-sm font-semibold text-accent"
          >
            Our Services
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute -bottom-5 h-[260px] w-full max-w-[1440px] bg-header-circle bg-center bg-no-repeat md:h-[220px]"></div>
      </div>
    </section>
  );
};

export default Header;
