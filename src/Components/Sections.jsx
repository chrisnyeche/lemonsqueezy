import { Box, Container, Heading, Text, VStack, Button, Icon, Image } from "@chakra-ui/react";
import "./Component.css";
import { Arrow } from "./Icons";

import Phones from "../Images/phones.png";
import Laptop from "../Images/laptop.png";

export function Standout() {
  return (
    <>
      <Box minHeight="vh-100" backgroundColor="#fee3bf">
        <Container maxW={"4xl"}>
          <VStack as={Box} textAlign={"center"} spacing={7} pt={{ base: 20, md: 43 }}>
            <Heading fontWeight={500} fontSize={{ base: "2xl", sm: "4xl", md: "7xl" }} lineHeight={"50%"} width={["80%", "80%", "97%"]} color="#7d3c00" mt={6}>
              Stand out from the trees.
            </Heading>
            <Text color={"#ea7f1a"} fontSize={"22px"} fontWeight={600} width={["70%", "70%", "50%"]} mx="auto">
              Extend your social media profile and keep your links in one place. Create a personal link in bio site for free.
            </Text>
            <Button color={"white"} bg={"#ea7f1a"} rounded={"full"} px={10} py={8} fontSize={20}>
              Get Started
            </Button>

            <Image src={Phones} alt="phones" />
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export function BuildProfile() {
  return (
    <>
      <Box minHeight="vh-100" backgroundColor="#084436">
        <Container maxW={"4xl"}>
          <VStack as={Box} textAlign={"center"} spacing={7} pt={{ base: 20, md: 43 }}>
            <Heading fontWeight={500} fontSize={{ base: "2xl", sm: "4xl", md: "96px" }} lineHeight={"100%"} width={["80%", "80%", "97%"]} color="#c4fae7" mt={6}>
              Build your profile with smart blocks.
            </Heading>
            <Text color={"#64e1b5"} fontSize={"22px"} fontWeight={600} width={["70%", "70%", "50%"]} mx="auto">
              No coding required. Go beyond links with smart cards, text blocks and embeds.
            </Text>
            <Button color={"#084436"} bg={"#c4fae7"} rounded={"full"} px={10} py={8} fontSize={20}>
              Get Started
            </Button>

            <Image src={Laptop} alt="laptop" />
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export function PublishCarousel() {
  return (
    <>
      <Box minHeight="vh-100" backgroundColor="#f9f5ff">
        <Container maxW={"4xl"}>
          <VStack as={Box} textAlign={"center"} spacing={7} pt={{ base: 20, md: 43 }}>
            <Heading fontWeight={500} fontSize={{ base: "2xl", sm: "4xl", md: "96px" }} lineHeight={"100%"} width={["80%", "80%", "97%"]} color="#3c0483" mt={6}>
              Publish your world with nano.
            </Heading>
            <Text color={"#9665da"} fontSize={"22px"} fontWeight={600} width={["70%", "70%", "50%"]} mx="auto">
              Explore some live examples.
            </Text>
            <Button color={"white"} bg={"#3c0483"} rounded={"full"} px={10} py={8} fontSize={20}>
              Get Started
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export function Reclaim() {
  return (
    <>
      <Box minHeight="vh-100" backgroundColor="#0033ff">
        <Container maxW={"4xl"}>
          <VStack as={Box} textAlign={"center"} spacing={7} pt={{ base: 20, md: 43 }}>
            <Heading fontWeight={500} fontSize={{ base: "2xl", sm: "4xl", md: "96px" }} lineHeight={"110%"} width={["80%", "80%", "97%"]} color="#f1fdff" mt={6}>
              Reclaim your username for free.
            </Heading>
            <Text color={"#68bdff"} fontSize={"22px"} fontWeight={600} width={["70%", "70%", "50%"]} mx="auto">
              Create a free bio site for social and beyond.
            </Text>
            <Button color={"#084436"} bg={"#c4fae7"} rounded={"full"} px={10} py={8} fontSize={20}>
              Get Started
            </Button>

            <Box pt={35}>
              <Icon as={Arrow} />
            </Box>
            <Text as="h2" fontSize={37} pb={20} color="green.300" fontWeight="bold">
              nano.site<Text as="span" color="white">/you</Text>
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export function Support() {
  return (
    <Box  minHeight="vh-100" backgroundColor="#343636" >
      <Box className="profile">
        <Container maxW={"4xl"} py={30} >
          <VStack as={Box} textAlign={"center"} spacing={4} pt={{ base: 20, md: 43 }}>
            <Heading fontWeight={500} fontSize={{ base: "2xl", sm: "4xl", md: "72px" }} lineHeight={"100%"} width={["80%", "80%", "97%"]} color="white" mt={6}>
            Need support or want to request a feature?
            </Heading>
            <Text color={"white"} fontSize={"24px"} fontWeight={600} width={["70%", "70%", "50%"]} mx="auto">
            We love to hear your ideas.
            </Text>
            <Button color={"#084436"} bg={"#c4fae7"} rounded={"full"} px={10} py={8} fontSize={20}>
              Leave a request
            </Button>
          </VStack>
        </Container>
      </Box>   
    </Box>
  );
}
