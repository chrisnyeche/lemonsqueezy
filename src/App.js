import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {Standout, BuildProfile, PublishCarousel, Reclaim, Support} from "./Components/Sections";
// import Slider from "./Components/Slider";

const App = () => {
  return (
    <>
      <Header />
      <Standout/>
      <BuildProfile/>
      <PublishCarousel/>
      <Reclaim/>
      <Support/>
      <Footer/>
      {/* <Slider /> */}
    </>
  );
};

export default App;
