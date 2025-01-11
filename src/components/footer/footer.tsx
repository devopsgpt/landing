import { FC } from 'react';
import { Link } from 'react-router';

export const Footer: FC = () => {
  return (
    <footer className="h-[100px] bg-normal py-1 text-center text-accent-dark">
      <div className="mx-auto h-0.5 w-1/2 bg-gray-800"></div>
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <p className="accent-accent-dark">
          Stay Ahead with Automation | Trusted by DevOps Experts Globally
          Empowering DevOps, One Query at a Time
        </p>
        <div className="mt-4 flex items-center">
          <Link to="/tos">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
