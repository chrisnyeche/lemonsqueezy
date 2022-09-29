import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

import { CgArrowLongRight } from "react-icons/cg";

export default function Testimonials() {
  return (
    <Box as="section">
      <Carousel />
    </Box>
  );
}

function Carousel() {
  return (
      <Box h="130vh" bg="#35389d" position={"relative"}>
        {/* Pink Semicircle */}
        <Box bg={"RGB(254, 194, 246)"} display={{ base: "none", lg: "block" }} transform="rotate(180deg)" top={"0px"} right="110px" h="105px" w="210px" position={"absolute"} borderRadius={"150px 150px 0 0"}></Box>

        {/* Text Content */}
        <Flex p={{ base: "24px", lg: "48px" }} flexDirection={{ base: "column", lg: "row" }} justifyContent={"space-between"} alignItems="self-end">

          {/* Text path */}
          <Box maxW={"650px"} lineHeight={10} pt={"48px"}>
            <Text color={"#ffc233"}> A home for your business</Text>
            <Heading as="h2" fontWeight={"400"} fontSize={{ base: "32px", md: "48px" }} color="white">
              Join your fellow creators
            </Heading>
            <Text fontSize={"18px"} color={"#787abe"} lineHeight={7} my={3}>
              Become part of a growing community of innovative thinkers, makers, movers, and shakers — you're in good company over here.
            </Text>
          </Box>

          {/* Button */}
          <Box pb={"auto"}>
            {/* Get Started */}
            <Button
              fontSize={"sm"}
              fontWeight={400}
              color={"white"}
              py={7}
              px={"75px"}
              borderRadius={"30px"}
              bg={"#7047eb"}
              rightIcon={<CgArrowLongRight fontSize={"38px"} />}
              href={"#"}
              _hover={{
                bg: "#7047eb",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Flex>
      </Box>
  );
}
