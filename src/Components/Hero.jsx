import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, Center } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon} from "@chakra-ui/icons";
import Logo from "../Images/logo.png";

const linkHoverColor = "#F56565";

export default function NavBar( {b}) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Center my="15px" mx={["15px", "20px", "30px"]}>
    <Box w="100%">
      <Flex bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.600", "white")} minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.900")} alignItems={"center"}>
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
          <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"ghost"} href={"#"} _hover={{ color: linkHoverColor }}>
            Sign In
          </Button>

          {/* Get Started */}
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg="red.400"
            href={"#"}
            _hover={{
              bg: "red.500",
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
    </Center>
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
