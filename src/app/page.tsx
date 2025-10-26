import Header from "@/components/home/header";
import Services from "@/components/home/services";
import VisualTour from "@/components/home/visual-tour";
import AboutUs from "@/components/home/about-us";
import CustomerFeedback from "@/components/home/customer-feedback";
import ContactUs from "@/components/home/contact-us";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

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
