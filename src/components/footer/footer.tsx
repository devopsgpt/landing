import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-normal text-accent-dark h-[100px] py-1 text-center">
      <div className="mx-auto h-0.5 w-1/2 bg-gray-800"></div>
      <div className="flex h-full w-full items-center justify-center text-center">
        <p className="accent-accent-dark">
          Stay Ahead with Automation | Trusted by DevOps Experts Globally
          Empowering DevOps, One Query at a Time
        </p>
      </div>
    </footer>
  );
};

export default Footer;
