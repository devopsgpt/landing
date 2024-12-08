import { FC, Suspense } from 'react';
import Header from './components/header/header';

const Home: FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Header />
    </Suspense>
  );
};

export default Home;
