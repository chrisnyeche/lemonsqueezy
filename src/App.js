import '@fontsource/inter/500.css'
import Hero from "./Components/Hero"
import Features from "./Components/Features";
// import Testimonials from "./Components/Testimonials";
// import Footer from "./Components/Footer";
import { Box } from "@chakra-ui/react";

const color = "#55555b"
const buttonColor = "#7148eb"


function App() {
  return (
    <Box color={color}>
    <Hero buttonColor={buttonColor}/>
    <Features/>
    </Box>
  );
}

export default App;