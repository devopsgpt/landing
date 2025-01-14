import { FC, Suspense, useEffect } from 'react';
import Header from './components/header/header';
import Services from './components/services/services';
import CustomerFeedback from './components/customer-feedback/CustomerFeedback';
import VisualTour from './components/visual-tour/visual-tour';
import { AboutUs } from './components/about-us/about-us';
import { useLocation } from 'react-router';
import { ContactUs } from './components/contact-us/contact-us';

const Home: FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

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
