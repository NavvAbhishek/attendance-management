"use client"
import FeatureSecOne from "../components/FeatureSecOne";
import FeatureSecTwo from "../components/FeatureSecTwo";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
  return (
    <div >
      <NavBar />
      <Hero/>
      <FeatureSecOne/>
      <FeatureSecTwo/>
      <NewsLetter/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
