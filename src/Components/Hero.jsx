import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Link, Popover, PopoverTrigger, useColorModeValue, useBreakpointValue, useDisclosure, Image, Heading} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

// CSS
import "./Components.css";

// Images
import Logo from "../Images/logo.png";
import HeroGirl from "../Images/hero-girl-drop.jpg";
import HeroGirlMobile from "../Images/hero-girl-drop-mobile.jpg";

// Icons
import YelloCircle from "../Icons/yellocircle.svg";
import RedCircle from "../Icons/redcircle.svg";
import { CgArrowLongRight, CgMenuRight } from "react-icons/cg";

// Colors
const linkHoverColor = "#7148eb";
const buttonColor = "#7148eb";

// Hero Section
export default function Hero() {
  return (
    <Box h={{base: "147vh", md: "167vh", lg: "147vh"}} backgroundImage={{base: `url(${HeroGirlMobile})`, lg: `url(${HeroGirl})`}} backgroundSize={{base: "110%", md: "107%", lg: "57%"}} backgroundPosition={{base: "-150% 100% ", md: "-220% 390px",  lg: "113% 125%"}} backgroundRepeat={"no-repeat"} position="relative" px={{ lg: "36"}}>
      <Box  mx={["15px", "10px", "35px"]}>
        <NavBar />

        <Box>
          <Heading as="h1" maxW={"550px"} fontSize={["32px", "62px"]} lineHeight={"72px"} mt={{base: "30px", md: "20px", lg: "170px"}} color="#26262E" fontWeight={500}>
            Sell digital products the easy-peasy way
          </Heading>
          <Text fontSize={"18px"} lineHeight="32px" maxW={"520px"} my={6}>
            {" "}
            Selling digital downloads, subscriptions, and software licenses has never been easier, faster, or more secure.
          </Text>
          {/* Get Started */}
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            py={7}
            px={"65px"}
            borderRadius={"30px"}
            bg={buttonColor}
            rightIcon={<CgArrowLongRight fontSize={"38px"} />}
            href={"#"}
            _hover={{
              bg: { linkHoverColor },
            }}
          >
            Get Started for free
          </Button>
          <Text fontSize={"16px"} lineHeight="32px" maxW={"480px"} mt={"60px"} mb={"30px"}>
            {" "}
            “Lemon Squeezy made it incredibly simple for me to start earning money online selling courses. It's a game changer!”
          </Text>

          <Flex gap={5} display={{base: "none", md: "flex"}}>
            <Image src={"https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-mike.jpg?version=1.8.1"} alt={"Mike Image"} rounded="full" w={"60px"} />
            <Box>
              <Text fontSize={"14px"} lineHeight="26px">
                Mike McAlister
                <Text color={{base:"black", lg: "#BCC0CF"}}>liftoffcourse.com</Text>
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Yellow Circle */}
        <Box position="absolute" left={"49%"} top="20%" display={{ base: "none", lg: "block" }}>
          <Image class="floating" src={YelloCircle} alt={"Yellow circle ball"} />
        </Box>

        {/* Red Circle */}
        <Box position="absolute" left={"65%"} top="44%" display={{ base: "none", lg: "block" }}>
          <Image class="floating" src={RedCircle} alt={"Red circle ball"} />
        </Box>

        {/* Pink Semicircle */}
        <Box bg={"RGB(254, 194, 246)"} display={{ base: "none", lg: "block" }} transform="rotate(90deg)" top="40%" left="90%" h="50px" w="90px" position={"absolute"} borderRadius={"150px 150px 0 0"}></Box> 

        {/* Purple Semicircle */}
        <Box className="semicircle" bg={"#7047EB"} display={{ base: "none", lg: "block" }} transform="rotate(180deg)" top="67%" left="47%" h="55px" w="110px" position={"absolute"} borderRadius={"150px 150px 0 0"}></Box>
      </Box>
    </Box>
  );
}

// <========= Components ===================>

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
      <Flex minH={"60px"} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.900")} alignItems={"center"}>
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
            <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <CgMenuRight fontSize={"24px"} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
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
            py={5}
            px={5}
            borderRadius={"18px"}
            bg={buttonColor}
            rightIcon={<CgArrowLongRight fontSize={"35px"} />}
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

// Desktop
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

// Mobile
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
  return (
    <Stack spacing={1}>
      <Flex
        p={2}
        as={Link}
        borderRadius={"25px"}
        bg="#F7F7F8"
        w="110px"
        ms="auto"
        direction={"column"}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={400} textAlign={"center"} color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
