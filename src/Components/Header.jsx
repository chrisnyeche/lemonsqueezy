import { Box, Icon, Text, Button, useColorModeValue, Heading, Container, SimpleGrid, VStack } from "@chakra-ui/react";
import { Logo } from "./Icons";
import "./Component.css";

function Header() {
  return (
    <Box as="header" backgroundColor="#cdd5d7">
      <Box className="header">
        {/* Navigation */}
        <SimpleGrid as="nav" columns={2} px={[1, 2, 7, 10]} py={4}>
          <Box p="2" ms={{ lg: "auto" }}>
            {/* Logo */}
            <Heading>
              <Icon as={Logo} />
            </Heading>
          </Box>
          {/* Nav Buttons */}
          <Box gap="2" ms="auto">
            <Button variant={"ghost"} color="white"> Login </Button>
            <Button bg="#174d41" py="unset" px={[2, 3 ,5]} color="#bef0df" _hover={{ bg: "#174d41", color: "#bef0df" }}>
              Create new
            </Button>
          </Box>
        </SimpleGrid>

        {/* Hero */}
        <Container maxW={"4xl"}>
          <VStack as={Box} textAlign={"center"} spacing={5} py={{ base: 20, md: 36 }}>
            <Heading fontWeight={500} fontSize={{ base: "2xl", sm: "4xl", md: "8xl" }} lineHeight={"110%"} width={["80%", "80%", "97%"]} color="white">
              Bio site for creative minds.
            </Heading>
            <Text color={"rgb(220, 224, 230)"} fontSize={"24px"} width={["90%", "90%", "60%"]} mx="auto">
              Build social media optimised profile page in minutes. Share your world with nano.site
            </Text>
            <Button
              color={"#3e735e"}
              bg={useColorModeValue('green.100', 'green.500')}
              rounded={"full"}
              px={10}
              py={35}
              fontSize={20}
              _hover={{
                bg: useColorModeValue('green.100', 'green.900')
              }}
            >
              Claim your free username
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}

export default Header;
