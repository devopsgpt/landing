import { FC } from 'react';

const Header: FC = () => {
  return (
    <section className="relative overflow-hidden h-dvh bg-background-radial">
      <a
        href="https://panel.hobs.ai"
        target="_blank"
        className="absolute px-6 py-1 text-sm text-white -translate-x-1/2 border left-1/2 top-8 rounded-3xl"
      >
        Sign In
      </a>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex h-[66px] items-center justify-center gap-6">
          <div className="h-0.5 w-[88px] rotate-180 bg-Linear" />
          <p className="text-sm text-accent">Devops Solutions</p>
          <div className="h-0.5 w-[88px] bg-Linear" />
        </div>
        <h1 className="bg-accent-linear bg-clip-text text-[64px] font-semibold text-transparent md:text-[128px]">
          Devops GPT
        </h1>
        <div className="flex h-[78px] items-center justify-center">
          <p className="text-lg text-center text-accent">
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
