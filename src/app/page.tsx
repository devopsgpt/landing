import Footer from "@/components/footer";
import AboutUs from "@/components/home/about-us";
import ContactUs from "@/components/home/contact-us";
import CustomerFeedback from "@/components/home/customer-feedback";
import Header from "@/components/home/header";
import Services from "@/components/home/services";
import VisualTour from "@/components/home/visual-tour";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

export const runtime = 'edge';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Header />
      <Services />
      <VisualTour />
      <AboutUs />
      <CustomerFeedback />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
