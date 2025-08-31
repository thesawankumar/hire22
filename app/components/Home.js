import CEO from "../pages/Ceo";
import FAQ from "../pages/Faq";
import Footer from "./Footer";
import Hero from "../pages/Hero";
import Hire from "../pages/Hire";
import Navbar from "./Navbar";
import ClientSlider from "../pages/Slider";
import Work from "../pages/Work";


export default function Home() {
    return (
        <div>
            <Hero />
            <Work />
            <Hire />
            <ClientSlider />
            <CEO />
            <FAQ />
        </div>
    )
}
