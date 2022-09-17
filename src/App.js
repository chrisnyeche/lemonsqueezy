import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import { Standout, BuildProfile, PublishCarousel, Reclaim, Support } from "./Components/Sections";

const App = () => {
  // AOS useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <>
      <Hero />
      <Standout />
      <BuildProfile />
      <PublishCarousel />
      <Reclaim />
      <Support />
      <Footer />
    </>
  );
};

export default App;
