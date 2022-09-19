import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import {Subscribe, Footer} from "./Components/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#f9faff">
    <Header/>
    <Hero/>
    <Features/>
    <Testimonials/>
    <Subscribe/>
    <Footer/>
    </Box>
  );
}

export default App;