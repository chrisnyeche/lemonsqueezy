import { Box, Container, Stack, SimpleGrid, Text, Link, VisuallyHidden, chakra, useColorModeValue, Icon, Button, Flex, VStack, Heading, Input } from "@chakra-ui/react";

// Icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

// Images
import { Logo } from "./Images";

export function Subscribe() {
  return (
    <Box as="section" p={"80px"}>
      <VStack spacing={{ base: 5, md: 7 }}>
        <Heading as="h4" color={"black"} fontSize={["1rem", "", "1.5rem"]} lineHeight={"lg"} textAlign="center">
          Stay Informed!
        </Heading>
        <Text color={"black"} fontSize={["1.2rem"]} lineHeight={"lg"} textAlign="center">
        Join our newsletter, we’ll inform you about the latest innovations.
        </Text>
        {/* Buttons */}
        <Flex gap={3} direction={["column", "row", "row"]} pt="3.2rem">
          <Input placeholder="Full Name" bg={"white"} border={0} shadow="md" _placeholder={{color: "gray.300"}}/>
          <Input placeholder="Email Address" bg={"white"} border={0} shadow="md" _placeholder={{color: "gray.300"}} />
          <Button size={"md"} fontWeight={"500"} px={"50px"} color={"#101A4D"} bg={"#fac700"} _hover={{ bg: "#fac700" }}> Subscribe
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}

export function Footer() {
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2} color="#01FE87">
        {children}
      </Text>
    );
  };
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={9}
        h={9}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        border={"1px solid"}
        borderColor={"#01FE87"}
        justifyContent={"center"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  return (
    <Box bg="#101A4D" color={"white"}>
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {/* First Column */}
          <Stack align={"flex-start"}>
            {/* Logo */}
            <Button as="a" href="" background="transparent" _hover={{ background: "transparent" }}>
              <Icon as={Logo} />
            </Button>
          </Stack>

          <Stack align={"flex-start"} spacing="1rem">
            <ListHeader>Links</ListHeader>
            <Link href={"#"} _hover={{ color: "white" }}>
              About Us
            </Link>
            <Link href={"#"} _hover={{ color: "white" }}>
              Contact Us
            </Link>
            <Link href={"#"} _hover={{ color: "white" }}>
              Build With Us
            </Link>
            <Link href={"#"} _hover={{ color: "white" }}>
              RIL Fellowship
            </Link>
            <Link href={"#"} _hover={{ color: "white" }}>
              Projects
            </Link>
            <Link href={"#"} _hover={{ color: "white" }}>
              Resource Center
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Button leftIcon={<BsTelephoneFill color="#01FE87" />} variant="ghost" p={0} m={0} _hover={{ bg: "transparent" }} fontWeight="400">
              +234 705 705 8359
            </Button>
            <Button leftIcon={<IoMdMail color="#01FE87" />} variant="ghost" p={0} m={0} _hover={{ bg: "transparent" }} fontWeight="400">
              hello@renaissance.ng
            </Button>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Address</ListHeader>
            <Flex gap={1}>
              <Icon as={MdLocationOn} color="#01FE87" mt={"5px"} fontSize={"25px"} />
              <Text>Renaissance House, 7 Grace avenue, Off Kemka Street, NTA road, Mgbuoba, Port Harcourt, Rivers State, Nigeria.</Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={2} w={"90%"} mx="auto" borderStyle={"solid"} borderColor={useColorModeValue("gray.600", "gray.800")}>
        <Container as={Stack} maxW={"8xl"} py={4} direction={{ base: "column", md: "row" }} spacing={4} justify={{ md: "space-between" }} align={{ md: "center" }}>
          <Text fontSize={"12px"}>© Copyright, Renaissance Innovation Labs 2021</Text>
          <Stack direction={"row"} spacing={3}>
            <SocialButton label={"YouTube"} href={"#"} _hover={{ color: "#01FE87" }}>
              <FaFacebookF color="#01FE87" fontSize={"18px"} />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"} _hover={{ color: "#01FE87" }}>
              <FaLinkedinIn color="#01FE87" fontSize={"18px"} />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"} _hover={{ color: "#01FE87" }}>
              <FaInstagram color="#01FE87" fontSize={"18px"} />
            </SocialButton>
            <SocialButton label={"Twitter"} href={"#"} _hover={{ color: "#01FE87" }}>
              <FaTwitter color="#01FE87" fontSize={"18px"} />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}


