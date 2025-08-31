import CEO from "./components/Ceo";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hire from "./components/Hire";
import Navbar from "./components/Navbar";
import ClientSlider from "./components/Slider";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Hire />
      <ClientSlider />
      <CEO />
      <FAQ />
      <Footer />
    </div>
  );
}
