import { FC, Suspense } from 'react';
import Header from './components/header/header';
import Services from './components/services/services';
import CustomerFeedback from './components/customer-feedback/CustomerFeedback';
import VisualTour from './components/visual-tour/visual-tour';
import { AboutUs } from './components/about-us/about-us';

const Home: FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Header />
      <AboutUs />
      <Services />
      <VisualTour />
      <CustomerFeedback />
    </Suspense>
  );
};

export default Home;
