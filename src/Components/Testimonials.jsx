import { Box, Heading, Image, SimpleGrid, Text, Icon, Button, Center, HStack } from "@chakra-ui/react";
import "./Components.css";
import { AiOutlineArrowRight } from "react-icons/ai";

// Images
import Laptop from "../Images/laptop.jpg";
import Teaching from "../Images/teaching.jpg";
import HomeGroup from "../Images/homegroup.jpg";

export default function Testimonials() {
  const testimonialCards = [
    {
      text: "Do you need a high-performing remote engineering and innovative team?",
      button: "Learn More",
      src: Laptop
    },
    {
      text: "We find problems and solve them with support and guidance from talented, smart and knowledgeable instructors",
      button: "Join Us Today",
      src: Teaching
    },
    {
      text: "We carry out research, we train individuals and corporate bodies.",
      button: "Learn With RIL",
      src: HomeGroup
    },
  ];
  return (
    <Box as={"section"}>
      <Box h={"120vh"} className={"testimonials"}>
        <Heading as={"h2"} textAlign={"center"} fontWeight={"400"} className="features" my={"96"} m={9}>
          New Models. <Heading as={"span"}> High Performance Teams. </Heading> Long-Term Success.
        </Heading>

        {/* Testimonial Cards */}
        <SimpleGrid columns={{base: "1", md:"3"}} p={[7, 8, 10]} spacing={10}>
          {testimonialCards.map((card) => {
            return (
              <Box bg="white" shadow="lg" p={5} h={["430px", "470px", "480px"]}>
                <Image src={card.src} />
                <Text fontSize={"lg"} py={"10px"}>
                  {card.text}
                </Text>
                <Button variant="ghost" bg="transparent" fontSize={"lg"} textAlign="start" px="0" mt="15px" py={["15px", "30px", "45px"]} _focus={{ bg: "transparent" }} _hover={{ bg: "transparent" }}>
                  {card.button}
                  <Box as="span" bg={"#01FE87"} borderRadius="50%" p="5px" mx="15px">
                    <Icon as={AiOutlineArrowRight} />
                  </Box>
                </Button>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
