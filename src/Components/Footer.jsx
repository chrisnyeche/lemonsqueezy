import { Flex, useBreakpointValue, useColorModeValue, Text, Button, Link } from "@chakra-ui/react";

// Images
import Logo from "../Images/logo.png";

export default function Footer() {
  const FooterLinks = ["Help", "API", "Privacy", "Terms", "Changelog", "Roadmap"];
  return (
    <Flex as="footer" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent={"space-between"} h="25vh" maxW={{ lg: "80%" }} mx="auto" p={3}>
      <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
        {/* Logo */}
        <Button variant={"ghost"} as="a" textAlign={useBreakpointValue({ base: "center", md: "left" })} color={useColorModeValue("gray.800", "white")} _hover={{ bg: "transparent" }} cursor="pointer">
          <img src={Logo} alt="logo" w={"100%"} />
        </Button>
        {/* COpyright */}
        <Text  fontSize="md" py={{base: "20px", md: "0"}}>
          © 2022 Lemon Squeezy, LLC.
        </Text>
      </Flex>

      <Flex flexDirection={{ base: "column", md: "row" }} gap={3}>
        {FooterLinks.map((links) => {
          return (
            <Link
              p={2}
              href={"#"}
              fontSize={"sm"}
              fontWeight={500}
              _hover={{
                textDecoration: "none",
                bg: "gray.100",
                color: "black",
                borderRadius: "15px"
              }}
            >
              {links}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}
