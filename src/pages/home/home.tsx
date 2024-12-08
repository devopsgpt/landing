import { FC, Suspense } from 'react';
import Header from './components/header/header';
import Services from './components/services/services';
import CustomerFeedback from './components/customer-feedback/CustomerFeedback';
import VisualTour from './components/visual-tour/visual-tour';

const Home: FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Header />
      <Services />
      <VisualTour />
      <CustomerFeedback />
    </Suspense>
  );
};

export default Home;
