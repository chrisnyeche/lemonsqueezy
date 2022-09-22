import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";

// Icons
import PinkYelloCircle from "../Icons/bigpink-smallyellocircle.svg";
import BlueSemiCircle from "../Icons/blue180circle.svg";

// Images
import StoreFront from "../Images/storefront-desktop.jpg";

// CSS
import "./Components.css";

export default function Features() {
  return (
    <Box as="section" h={"147vh"} overflow="hidden" position="relative">
      {/* Purple Box */}
      <Box height={["200px", "350px", "650px"]} width={["200px", "350px", "650px"]} border-radius="50%" bg={"#35389D"} position="absolute" left={"-240px"} zIndex={"-1"} top={"13%"} />

      {/* Pink Circle */}
      <Box className="circle floating" bg={"#F53D6B"} position="absolute" right={"-210px"} top={"40%"} zIndex={"-1"} />

      {/* Pink Yellow circle */}
      <Box position="absolute" right={"100px"} top={"69%"}>
        <Image src={PinkYelloCircle} alt={"Pink Yellow circle"} zIndex={"1"} />
      </Box>

      {/* Blue SemiCircle */}
      <Box position="absolute" left={"110px"} top={"63%"}>
        <Image src={BlueSemiCircle} alt={" Blue SemiCircle Icon"} zIndex={"1"} />
      </Box>

      {/* Green Circle */}
      <Box className="circle" bg={"#2DCA72"} height={"120px"} width={"120px"} position="absolute" left={"12%"} zIndex={"3"} top={"42%"} rounded="full" />

      {/* Feature Store arena image */}
      <Center flexDirection={"column"}>
        <Box as="section" textAlign={"center"} mb={"70px"}>
        <Text maxW={"600px"} fontSize="md" color={"#7148eb"} lineHeight={"30px"}>Build your business.</Text>
          <Heading as={"h2"} fontSize="5xl" my={5} color="#25252D" fontWeight={"light"}>
            Create your store
          </Heading>
          <Text maxW={"600px"} fontSize="lg" lineHeight={"30px"}>Build an ecommerce website in minutes without coding or design skills. Customizable, SSL secured and mobile-optimized as standard.</Text>
        </Box>
        <Image src={StoreFront} alt="Store Front" w={["90%", "88%", "68%"]} h={"70%"} zIndex={"2"} shadow="lg" borderRadius={"7px"} />
      </Center>
    </Box>
  );
}
