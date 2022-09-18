import { Box, Heading, Image, SimpleGrid, VStack, Text, Icon, Button } from "@chakra-ui/react";
import "./Components.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Laptop from "../Images/laptop.jpg";

export default function Testimonials() {
  return (
    <Box as={"section"}>
      <Box h={"120vh"} className={"testimonials"}>
        <Heading as={"h2"} textAlign={"center"} p="150px" fontWeight={"400"} className="features">
          New Models. <Heading as={"span"}> High Performance Teams. </Heading> Long-Term Success.
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} mx="50px" ps="70px" spacing={10}>
          <Box bg="white" w="400px" h="470px" p={5} shadow="lg">
            <Image src={Laptop} />
            <Text fontSize={"18px"} py={"10px"}>
              Do you need a high-performing remote engineering and innovative team?
            </Text>
            <Button variant="ghost" fontSize={"lg"} textAlign="start" py={"60px"}>
              Learn More
              <Box as="span" bg={"#01FE87"} borderRadius="50%" p="5%" mx="15px">
                <Icon as={AiOutlineArrowRight} />
              </Box>
            </Button>
          </Box>
          <Box bg="white" w="400px" h="470px" p={5} shadow="lg">
            <Image src={Laptop} />
            <Text fontSize={"18px"} py={"10px"}>
              Do you need a high-performing remote engineering and innovative team?
            </Text>
            <Button variant="ghost" fontSize={"lg"} textAlign="start" py={"60px"}>
              Learn More
              <Box as="span" bg={"#01FE87"} borderRadius="50%" p="5%" mx="15px">
                <Icon as={AiOutlineArrowRight} />
              </Box>
            </Button>
          </Box>
          <Box bg="white" w="400px" h="470px" p={5} shadow="lg">
            <Image src={Laptop} />
            <Text fontSize={"18px"} py={"10px"}>
              Do you need a high-performing remote engineering and innovative team?
            </Text>
            <Button variant="ghost" fontSize={"lg"} textAlign="start" py={"60px"}>
              Learn More
              <Box as="span" bg={"#01FE87"} borderRadius="50%" p="5%" mx="15px">
                <Icon as={AiOutlineArrowRight} />
              </Box>
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
