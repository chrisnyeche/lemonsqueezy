import { Stack, Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import HeroImage from "../Images/hero-img.png";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <Box bg="#101A4D" height={["fit-content"]} mt={{lg: "50px"}}>
        {/* Primary Navbar */}
      <Navbar />
      <Flex justifyContent={"space-between"} direction={{ base: "column", md: "row" }} px={[2, 5, "45px"]} pb={[2, 5, "45px"]}>
        {/* Hero Text */}
        <Stack spacing={{ base: 5, md: 10 }} maxW={"3xl"} mt={'9'}>
          <Heading as="h1" lineHeight={1.1} fontWeight={700} fontSize={{ base: "5xl", sm: "5xl", lg: "73px" }}>
            <Text as={"span"} color="#01FE87">
              Re-Imagine{" "}
            </Text>
            <Text as={"span"} color={"white"}>
              Africa.
            </Text>
          </Heading>
          <Text color={"white"} fontSize="17px" lineHeight={"md"}>
            At Renaissance Innovation Labs, we reimagine Africa in today’s world of rapid technological development. We find the smartest people, provide them with the right tools for success, and generate innovative solutions for individuals and industries.
          </Text>

          {/* Hero Buttons */}
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
            <Button size={"lg"} fontWeight={"500"} px={"45px"} color={"#101A4D"} bg={"#01FE87"} _hover={{ bg: "#01FE87" }} w={"170px"}>
              Get started
            </Button>
            <Button size={"lg"} fontWeight={"normal"} color="#01FE87" px={6} variant={"outline"} borderColor={"#01FE87"} w={"170px"} _hover={{background: "transparent"}}>
              Learn More
            </Button>
          </Stack>
        </Stack>

        {/* Hero Image */}
        <Box>
          <Image src={HeroImage} alt={"hero image"} w="100%" />
        </Box>
      </Flex>
    </Box>
  );
}
