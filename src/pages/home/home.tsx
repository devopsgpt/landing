import { FC, Suspense } from 'react';
import Header from './components/header/header';
import Services from './components/services/services';
import CustomerFeedback from './components/customer-feedback/CustomerFeedback';
import VisualTour from './components/visual-tour/visual-tour';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';

const Home: FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Header />
      <Services />
      <VisualTour />
      <AboutUs />
      <CustomerFeedback />
      <ContactUs />
    </Suspense>
  );
};

export default Home;
