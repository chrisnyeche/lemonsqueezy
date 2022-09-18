import { Box, Flex, Button, HStack, InputLeftElement, Input, InputGroup, IconButton } from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  const iconButtons = [
    {
      icon: <FaFacebookF/>,
      href: "#",
    },
    {
      icon: <FaLinkedin/>,
      href: "#",
    },
    {
      icon: <FaInstagram/>,
      href: "#",
    },
    {
      icon: <FaTwitter/>,
      href: "#",
    },
  ];
  
  return (
    <Box display={{ base: "none", lg: "block" }}>
      <Box px={20} py={2}>
        <Flex alignItems={"center"} justifyContent="space-between">
          <HStack direction="row" spacing={2}>
            <Button leftIcon={<IoMdMail />} variant={"ghost"} as="a" href="mailto:mail@mail.com">
              hello@renaissance.ng
            </Button>
            <Button leftIcon={<BsFillTelephoneFill />} variant={"ghost"} as="a" href="2347057058359">
              +234 705 705 8359
            </Button>
          </HStack>

          <HStack spacing={4} me={20}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<BsSearch className="text-secondary" />} py={5} />
              <Input type="text" placeholder="What do you want to know?" width={300} py={5} _placeholder={{ opacity: 1, color: "gray.500" }} />
            </InputGroup>

            <HStack>
              <HStack>
                {iconButtons.map((btn) => {
                    return <IconButton variant="outline" borderRadius={"full"} borderColor={"black"} aria-label="social media buttons" fontSize="18px" mx="2" icon={btn.icon} />
                })}
              </HStack>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
