import { Box, Flex, Button, HStack, InputLeftElement, Input, InputGroup, IconButton } from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  const iconButtons = [
    {
      icon: <FaFacebookF />,
      href: "#",
    },
    {
      icon: <FaLinkedinIn />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaTwitter />,
      href: "#",
    },
  ];

  return (
    <Box display={{ base: "none", lg: "block" }} className="fixed-top" bg={"white"} shadow={"lg"}>
      <Box ps={9} py={2}>
        <Flex alignItems={"center"} justifyContent="space-between">
          {/* Email & Phone */}
          <HStack direction="row" spacing={"2px"}>
            {/* Email */}
            <Button leftIcon={<IoMdMail />} variant={"ghost"} as="a" href="mailto:mail@mail.com" fontWeight={"400"}>
              hello@renaissance.ng
            </Button>

            {/* Phone */}
            <Button leftIcon={<BsFillTelephoneFill />} variant={"ghost"} as="a" href="2347057058359" fontWeight={"400"}>
              +234 705 705 8359
            </Button>
          </HStack>

          {/* Search Bar and social */}
          <HStack spacing={4} me={"9"}>
            {/* Search Bar */}
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<BsSearch className="text-secondary" />} py={5} />
              <Input type="text" placeholder="What do you want to know?" width={300} py={5} _placeholder={{ opacity: 1, color: "gray.500" }} />
            </InputGroup>

            {/* Social Icons */}
            <HStack>
              <HStack>
                {iconButtons.map((btn) => {
                  return <IconButton variant="outline" borderRadius={"full"} borderColor={"black"} aria-label="social media buttons" fontSize="18px" mx="2" icon={btn.icon} />;
                })}
              </HStack>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
