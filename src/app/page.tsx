import { Poppins } from "next/font/google";
import FeatureSecOne from "./components/FeatureSecOne";
import FeatureSecTwo from "./components/FeatureSecTwo";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

const poppins = Poppins({
  subsets: ['latin'],
  weight:['300','400','500','600','700']
})

export default function Home() {
  return (
    <div className={poppins.className}>
      <NavBar />
      <Hero/>
      <FeatureSecOne/>
      <FeatureSecTwo/>
      <Testimonial/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}
