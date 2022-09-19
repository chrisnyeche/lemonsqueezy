import { Box, Heading, Image, SimpleGrid, Text, Icon, Button, Flex, VStack, Divider, HStack } from "@chakra-ui/react";
import "./Components.css";
import { AiOutlineArrowRight } from "react-icons/ai";

// Images
import Laptop from "../Images/laptop.jpg";
import Teaching from "../Images/teaching.jpg";
import HomeGroup from "../Images/homegroup.jpg";
import Quote from "../Images/quote.svg";
import HenryFord from "../Images/henry-ford.png";
import HomeEnd from "../Images/home-end.jpg";

export default function Testimonials() {
  const testimonialCards = [
    {
      text: "Do you need a high-performing remote engineering and innovative team?",
      button: "Learn More",
      src: Laptop,
    },
    {
      text: "We find problems and solve them with support and guidance from talented, smart and knowledgeable instructors",
      button: "Join Us Today",
      src: Teaching,
    },
    {
      text: "We carry out research, we train individuals and corporate bodies.",
      button: "Learn With RIL",
      src: HomeGroup,
    },
  ];
  return (
    <Box as={"section"}>
      <Box className={"testimonials"} pt={"100px"}>
        <Heading as={"h2"} textAlign={"center"} fontWeight={"400"} className="features" my={"5"}>
          New Models. <Heading as={"span"}> High Performance Teams. </Heading> Long-Term Success.
        </Heading>

        {/* Testimonial Cards */}
        <SimpleGrid columns={{ base: "1", md: "3" }} p={[5, 8, 10]} spacing={10}>
          {testimonialCards.map((card) => {
            return (
              <Box bg="white" shadow="lg" p={5} h={["430px", "xl", "xl"]}>
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

      {/* Card Quote */}
      <Flex as="section" justifyContent={"center"} alignItems={"center"} p={8} mt={5}>
        <VStack shadow={"lg"} h={["340px", "420px"]} w="600px" bg="white" borderRadius={"5px"} position="relative" p={["25px", "55px", "60px"]} textAlign="center">
          <Image src={Quote} alt={Quote} position="absolute" bottom={["265px", "340px", "360px"]} left={["", "", "260px"]} zIndex={"1"} />
          <Text fontSize={["lg", "xl", "1.5rem"]} lineHeight={["1.5rem", "2rem", "2rem"]} py={5}>
            {" "}
            Coming together is a beginning, Staying together is progress, working together is success.{" "}
          </Text>

          <Divider orientation="horizontal" w={"85px"} height="6px" bg={"#101A4D"} opacity={"1.0"} />

          <Flex alignItems={"center"} pt={2}>
            <Image src={HenryFord} alt={"Henry Ford"} />
            <Text fontSize={["1.2rem", "1.8rem", "2rem"]} color={"#101A4D"} fontWeight={"700"} mb={6}>
              Henry Ford
            </Text>
          </Flex>
        </VStack>
      </Flex>

      {/* Partner with us */}
      <Flex as={"section"} position="relative" background={`linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${HomeEnd})`} backgroundPosition="100% 40%" backgroundRepeat={"no-repeat"} backgroundSize={"cover"} h={["35vh", "30vh", "47vh"]} justifyContent={"center"} alignItems={"center"}>
        <VStack spacing={{ base: 5, md: 10 }}>
          <Text as="h4" color={"white"} fontSize={["1rem", "", "1.5rem"]} lineHeight={"lg"} fontWeight={700} textAlign="center">
            We've got amazing facilities, equipment and personnel
          </Text>
          {/* Buttons */}
          <Flex gap={2} direction={["column", "row", "row"]}>
            <Button size={"md"} fontWeight={"500"} px={"45px"} color={"#101A4D"} bg={"#01FE87"} _hover={{ bg: "#01FE87" }} w={"170px"}>
              Get started
            </Button>
            <Button size={"md"} fontWeight={"normal"} color="#01FE87" px={6} variant={"outline"} borderColor={"#01FE87"} w={"170px"} _hover={{ background: "transparent" }}>
              Learn More
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
