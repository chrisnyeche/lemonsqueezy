import { Box, Heading, SimpleGrid, Text, Button, Icon, VStack, Image } from "@chakra-ui/react";
import { Collabration, Performance, Growth } from "./Images";
import Impact from "../Images/impact.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Components.css";

function Features() {
  return (
    <Box as="section" position="relative">
      {/* Renaissance  */}
      <Box textAlign={["left", "center", "center"]} maxW={"930px"} mx={"auto"} p={[1, 10, 30]}>
        <Box className="features">
          <Heading as={"h2"} fontSize={["3xl", "4xl", "5xl"]} textAlign={"center"} fontWeight="500" mt="9">
            Renaissance{" "}
            <Text as="span" fontWeight="400">
              Innovation Labs.
            </Text>
          </Heading>
        </Box>

        <Text as="p" color="#73797f" fontSize="1rem" lineHeight="1.5rem" mt={[5, 9, "50px"]} p="2">
          The #1 innovative company in Africa, impacting at least 1000 lives annually by 2023. We engage diverse communities in open collaboration to create, elaborate, and prototype disruptive solutions.
        </Text>
      </Box>

      {/* Features 1 */}
      <Box p={4} as="section">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Collabration */}
          <VStack textAlign={"center"} mx="auto" spacing={5}>
            <Icon as={Collabration} />
            <Heading as={"h3"} fontWeight={"400"}>
              Collaboration
            </Heading>
            <Text fontSize={"18px"} maxW={"240px"}>
              {" "}
              Collaboration to create new models, products and services.
            </Text>
            <Button variant="ghost" fontSize={"lg"}>
              Learn More
              <Box as="span" bg={"#01FE87"} borderRadius="50%" p="5%" mx="15px">
                <Icon as={AiOutlineArrowRight} />
              </Box>
            </Button>
          </VStack>

          {/* Performance */}
          <VStack textAlign={"center"} mx="auto" spacing={5}>
            <Icon as={Performance} />
            <Heading as={"h3"} fontWeight={"400"}>
              Performance
            </Heading>
            <Text fontSize={"18px"} maxW={"240px"}>
              {" "}
              High performance teams employing agile project delivery frameworks and methodologies.
            </Text>
            <Button variant="ghost" fontSize={"lg"}>
              Learn More
              <Box as="span" bg={"#FC515B"} borderRadius="50%" p="5%" mx="15px">
                <Icon as={AiOutlineArrowRight} />
              </Box>
            </Button>
          </VStack>

          {/* Growth */}
          <VStack textAlign={"center"} mx="auto" spacing={5}>
            <Icon as={Growth} />
            <Heading as={"h3"} fontWeight={"400"}>
              Growth
            </Heading>
            <Text fontSize={"18px"} maxW={"240px"}>
              Rapid iteration ensures market successes and spin-off business units.
            </Text>
            <Button variant="ghost" fontSize={"lg"}>
              Learn More
              <Box as="span" bg={"#FAC700"} borderRadius="50%" p="5%" mx="15px">
                <Icon as={AiOutlineArrowRight} />
              </Box>
            </Button>
          </VStack>

          <Box></Box>
          <Box></Box>
        </SimpleGrid>
      </Box>

      {/* Features 2 */}
      <Box as="section" p={[5, 8, 10]}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={"center"}>
          {/* Impact Image */}
          <Box>
            <Image src={Impact} alt={"hero"} />
          </Box>

          <Box>
            {/* Impact Text */}
            <Heading as={"h4"} fontWeight="400" fontSize={['2xl', "3xl", "4xl"]}>
            We are making impact across the globe!{" "}
              <Text as={'h2'} my="2" fontWeight="700" className="features">
              Check out our projects.
              </Text>
            </Heading>
            <Box zIndex={-1}>
            {/* <Brush/> */}
            </Box>

            <Text maxW={"400px"} fontSize="18px">
            We've got it covered - agriculture, manufacturing, transportation, finance, energy, and more.
            </Text>

            <Button size={"md"} mt={7} fontWeight={"500"} px={"30px"} py={"10px"} color={"#101A4D"} bg={"#FAC700"} _hover={{ bg: "#FAC700" }}>
             View Projects
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Features;
