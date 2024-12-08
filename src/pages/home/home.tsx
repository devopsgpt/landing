import { FC, Suspense } from 'react';
import Header from './components/header/header';
import Services from './components/services/services';

const Home: FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Header />
      <Services />
    </Suspense>
  );
};

export default Home;
