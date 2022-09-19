import { Box, Container, Stack, SimpleGrid, Text, Link, VisuallyHidden, chakra, useColorModeValue, Icon, Button, Flex } from "@chakra-ui/react";

// Icons
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import {MdLocationOn} from "react-icons/md"


import { Logo } from "./Images";

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
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
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
              <Text>
              Renaissance House, 7 Grace avenue, Off Kemka Street, NTA road, Mgbuoba, Port Harcourt, Rivers State, Nigeria.
            </Text>
            </Flex>

          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={2} w={"90%"} mx="auto" borderStyle={"solid"} borderColor={useColorModeValue("gray.600", "gray.800")}>
        <Container as={Stack} maxW={"8xl"} py={4} direction={{ base: "column", md: "row" }} spacing={4} justify={{ md: "space-between" }} align={{ md: "center" }}>
          <Text fontSize={"12px"}>© Copyright, Renaissance Innovation Labs 2021</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"} _hover={{ color: "white" }}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"} _hover={{ color: "white" }}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"} _hover={{ color: "white" }}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
