import { FC } from 'react';
import { Outlet } from 'react-router';
import { Footer } from '../';

export const MainLayout: FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
