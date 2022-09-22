import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, useColorModeValue, useBreakpointValue, useDisclosure, Center, Image, Heading, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

// Images
import HeroGirl from "../Images/hero-girl-drop.jpg";
import Logo from "../Images/logo.png";

// Icons
import YelloCircle from "../Icons/yellocircle.svg";
import RedCircle from "../Icons/redcircle.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

const linkHoverColor = "#7148eb";
const buttonColor = "#7148eb";

export default function Hero() {
  return (
    <Box h={"145vh"} backgroundImage={`url(${HeroGirl})`} backgroundSize="66%" backgroundPosition={"140% 101%"} backgroundRepeat={"no-repeat"} position="relative">
      <Box py="10px" mb="15px" mx={["15px", "20px", "35px"]}>
        <NavBar />

        <Box gap={"14px"}>
          <Heading as="h1" maxW={"550px"} fontSize={["32px", "64px"]} lineHeight={"72px"} mt={["30px", "50px", "150px"]}>
            Sell digital products the easy-peasy way
          </Heading>
          <Text fontSize={"18px"} lineHeight="32px" maxW={"550px"}>
            {" "}
            Selling digital downloads, subscriptions, and software licenses has never been easier, faster, or more secure.
          </Text>
          {/* Get Started */}
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            borderRadius={"18px"}
            bg={buttonColor}
            rightIcon={AiOutlineArrowRight}
            href={"#"}
            _hover={{
              bg: { linkHoverColor },
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Yellow Circle */}
        <Image src={YelloCircle} alt={"Yellow circle ball"} position="absolute" left={"50%"} top="20%" display={{ base: "none", md: "block" }} />

        {/* Red Circle */}
        <Image src={RedCircle} alt={"Red circle ball"} position="absolute" left={"68%"} top="50%" display={{ base: "none", md: "inline-block" }} />
      </Box>
    </Box>
  );
}

// Nav Items
const NAV_ITEMS = [
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "@lmsqueezy",
    href: "#",
  },
];

// Complete Navbar
function NavBar({ b }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box w="100%">
      <Flex minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.900")} alignItems={"center"}>
        <Flex flex={{ base: 1 }}>
          {/* Logo */}
          <Button variant={"ghost"} textAlign={useBreakpointValue({ base: "center", md: "left" })} color={useColorModeValue("gray.800", "white")} _hover={{ bg: "transparent" }}>
            <img src={Logo} alt="logo" />
          </Button>

          {/* Desktop Navbar */}
          <Flex display={{ base: "none", md: "flex" }} ml={1} alignItems={"center"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={4}>
          <Flex flex={{ base: "end", md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} ps="3">
            {/* Hamburger */}
            <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
          </Flex>

          {/* Sign in  */}
          <Button as={"a"} display={{ base: "none", md: "inline-flex" }} fontSize={"sm"} fontWeight={400} variant={"solid"} borderRadius="27px" bg="white" href={"#"} _hover={{ color: linkHoverColor }}>
            Sign In
          </Button>

          {/* Get Started */}
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            borderRadius={"18px"}
            bg={buttonColor}
            rightIcon={AiOutlineArrowRight}
            href={"#"}
            _hover={{
              bg: { linkHoverColor },
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
        {children && <Icon as={ChevronDownIcon} _focus={{ color: "#f56565" }} _hover={{ color: "#f56565" }} transition={"all .25s ease-in-out"} transform={isOpen ? "rotate(180deg)" : ""} w={6} h={6} />}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")} align={"start"}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
