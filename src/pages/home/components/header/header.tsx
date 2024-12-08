import { FC } from 'react';

const Header: FC = () => {
  return (
    <section className="relative h-dvh overflow-hidden bg-background-radial">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex h-[66px] items-center justify-center gap-6">
          <div className="h-0.5 w-[88px] rotate-180 bg-Linear" />
          <p className="text-sm text-accent">Devops Solutions</p>
          <div className="h-0.5 w-[88px] bg-Linear" />
        </div>
        <h1 className="bg-accent-linear bg-clip-text text-[128px] font-semibold text-transparent">
          Devops GPT
        </h1>
        <div className="flex h-[78px] items-center justify-center">
          <p className="text-lg text-accent">
            From Setup to Scale, We’ve Got You Covered
          </p>
        </div>
        <div className="flex h-[90px] items-start justify-center">
          <button className="bg-accent-linear-2 flex h-[50px] w-[238px] items-center justify-center rounded-lg border border-gray-700 px-4 py-2 text-sm font-semibold text-accent">
            Our Services
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-header-circle absolute -bottom-5 h-[280px] w-full max-w-[1440px] bg-no-repeat"></div>
      </div>
    </section>
  );
};

export default Header;
