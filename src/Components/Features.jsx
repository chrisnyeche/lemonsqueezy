import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

// Icons
import PinkYelloCircle from "../Icons/bigpink-smallyellocircle.svg";
import BlueSemiCircle from "../Icons/blue180circle.svg";
import BalloonBlue from "../Icons/balloonblue.svg";
import BalloonGreen from "../Icons/balloongreen.svg";
import Pdash from "../Icons/pdash.svg";
import Pointer from "../Icons/ppointer.svg";
import ClouDrop from "../Icons/pcloudrop.svg";
import Refresh from "../Icons/prefresh.svg";

// Images
import StoreFront from "../Images/storefront-desktop.jpg";
import CheckOut from "../Images/checkout.jpg";
import Email from "../Images/email.png";

// CSS
import "./Components.css";

export default function Features() {
  return (
    <>
      <Store />
      <Products1 />
      <Products2 />
    </>
  );
}

function Store() {
  return (
    <Box as="section" h={{ lg: "147vh" }} position="relative" overflow={"hidden"}>
      {/* Purple Box */}
      <Box height={["200px", "500px", "650px"]} width={["200px", "500px", "650px"]} border-radius="50%" bg={"#35389D"} position="absolute" left={"-240px"} zIndex={"-1"} top={"13%"} rounded="full" display={{ base: "none", lg: "block" }} />

      {/* Pink Circle */}
      <Box className="floating" height={["200px", "500px", "650px"]} width={["200px", "500px", "650px"]} bg={"#F53D6B"} position="absolute" right={"-210px"} top={"40%"} zIndex={"-1"} rounded="full" display={{ base: "none", lg: "block" }} />

      {/* Pink Yellow circle */}
      <Box position="absolute" right={"100px"} top={"69%"}>
        <Image src={PinkYelloCircle} alt={"Pink Yellow circle"} zIndex={"1"} display={{ base: "none", lg: "block" }} />
      </Box>

      {/* Blue SemiCircle */}
      <Box position="absolute" left={"110px"} top={"63%"}>
        <Image src={BlueSemiCircle} alt={" Blue SemiCircle Icon"} zIndex={"1"} display={{ base: "none", lg: "block" }} />
      </Box>

      {/* Green Circle */}
      <Box className="circle" bg={"#2DCA72"} height={"120px"} width={"120px"} position="absolute" left={"12%"} zIndex={"3"} top={"42%"} rounded="full" display={{ base: "none", lg: "block" }} />

      {/* Feature Store arena image */}
      <Center flexDirection={"column"}>
        <Box as="section" textAlign={"center"} mb={"70px"}>
          <Text maxW={"600px"} fontSize="md" color={"#7148eb"} lineHeight={"30px"}>
            Build your business.
          </Text>
          <Heading as={"h2"} fontSize="5xl" my={5} color="#25252D" fontWeight={"light"}>
            Create your store
          </Heading>
          <Text maxW={"600px"} lineHeight={"30px"} p={2}>
            Build an ecommerce website in minutes without coding or design skills. Customizable, SSL secured and mobile-optimized as standard.
          </Text>
        </Box>
        <Image src={StoreFront} alt="Store Front" w={["90%", "88%", "68%"]} h={"70%"} zIndex={"2"} shadow="lg" borderRadius={"7px"} />
      </Center>
    </Box>
  );
}

function Products1() {
  return (
    <>
      <Flex flexDirection={{ base: "column", md: "row" }} alignItems={"center"} h={"fit-content"} gap={{ md: "30px", lg: "65px" }} mt="20px" p={2}>
        {/* Balloon */}
        <Box as="section" position="relative" h={{ base: "fit-content", md: "150vh" }} w={{ base: "100%", lg: "50%" }}>
          {/* Balloon Blue Ellipse" */}
          <Box top={{ md: "50px" }} left={{ md: "-470px" }} right={{ md: "20px" }} position={{ md: "absolute" }} className="rotate" zIndex={{ md: "-1" }}>
            <Image src={BalloonBlue} alt={"Balloon Blue Ellipse"} display={{ base: "none", md: "block" }} />
          </Box>

          {/* Checkout */}
          <Image src={CheckOut} alt={"Checkout image"} zIndex={"1"} w={{ base: "90%", md: "90%", lg: "50%" }} borderRadius="15px" top={{ base: "10px", md: "50px", lg: "260px" }} position={{ md: "absolute" }} left={{ base: "10px", lg: "220px" }} shadow={{ base: "lg", md: "2xl" }} mx="auto" my={3} />

          {/* Yellow Circle */}
          <Box className="floating" border-radius="50%" bg={"#FEC133"} height={"80px"} width={"80px"} position="absolute" left={"180px"} zIndex={"3"} top={{ lg: "550px" }} rounded="full" display={{ base: "none", lg: "block" }} />

          {/* Pink Circle */}
          <Box border-radius="50%" bg={"#FCC5F3"} height={"110px"} width={"110px"} position="absolute" left={"550px"} zIndex={"-1"} bottom={"140px"} rounded="full" display={{ base: "none", lg: "block" }} />
        </Box>

        {/* Text Path */}
        <Box as="section" w={{ base: "100%", lg: "50%" }} pt={{ lg: "100px" }} p={4}>
          <Text maxW={"600px"} fontSize="md" color={"#7148eb"} lineHeight={"30px"}>
            Start your business.
          </Text>
          <Heading as={"h2"} fontSize={{ base: "3xl", lg: "5xl" }} mb={5} color="#25252D" fontWeight={"light"}>
            Sell your products
          </Heading>
          <Text maxW={{ base: "800px", lg: "600px" }} fontSize={{ base: "md", md: "md", lg: "lg" }} lineHeight={"30px"} my={5}>
            Accept payments with a super-quick, mobile-friendly checkout without worrying about payment gateways, taxes, and file delivery
          </Text>

          {/* Flex */}
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={Pdash} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Sell your anywhere
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Sell products on any website by embedding your Checkout Overlay or by sharing your Checkout Link.
              </Text>
            </Box>
            <Box>
              <Image src={Pointer} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Sell your anywhere
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Sell products on any website by embedding your Checkout Overlay or by sharing your Checkout Link.
              </Text>
            </Box>
          </Flex>
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={ClouDrop} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Sell your anywhere
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Sell products on any website by embedding your Checkout Overlay or by sharing your Checkout Link.
              </Text>
            </Box>
            <Box>
              <Image src={Refresh} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Sell your anywhere
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Sell products on any website by embedding your Checkout Overlay or by sharing your Checkout Link.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

function Products2() {
  return (
    <>
      <Flex flexDirection={{ base: "column", md: "row" }} alignItems={"center"} h={"fit-content"} gap={{ md: "30px", lg: "65px" }} mt="20px" p={2}>
        {/* Balloon */}
        <Box as="section" position="relative" h={{ base: "fit-content", md: "150vh" }} w={{ base: "100%", lg: "50%" }}>
          {/* Yellow Circle */}
          <Box className="floating" border-radius="50%" bg={"#FEC133"} height={"150px"} width={"150px"} position="absolute" left={"109px"} zIndex={"1"} top={{ lg: "550px" }} rounded="full" display={{ base: "none", lg: "block" }} />

          {/* Pink Circle */}
          <Box border-radius="50%" bg={"#FCC5F3"} height={"100px"} width={"100px"} position="absolute" left={"520px"} zIndex={"2"} bottom={"15px"} rounded="full" display={{ base: "none", lg: "block" }} />

          {/* Balloon Green Ellipse" */}
          <Box top={{ md: "50px" }} left={{ md: "-470px" }} right={{ md: "20px" }} position={{ md: "absolute" }} className="rotate" zIndex={{ md: "-1" }}>
            <Image src={BalloonGreen} alt={"Balloon Green Ellipse"} display={{ base: "none", md: "block" }} />
          </Box>

          {/* Email*/}
          <Image src={Email} alt={"Checkout image"} zIndex={"1"} w={{ base: "90%", md: "90%", lg: "65%" }} top={{ base: "10px", md: "270px", lg: "320px" }} position={{ md: "absolute" }} left={{ base: "10px", md: "5px", lg: "160px" }} shadow={{ base: "lg", md: "2xl" }} mx="auto" my={3} />
        </Box>

        {/* Text Path */}
        <Box as="section" w={{ base: "100%", lg: "50%" }} pt={{ lg: "100px" }} p={4}>
          <Text maxW={"600px"} fontSize="md" color={"#7148eb"} lineHeight={"30px"}>
            Email for your business
          </Text>
          <Heading as={"h2"} fontSize={{ base: "3xl", lg: "5xl" }} mb={5} color="#25252D" fontWeight={"light"}>
            Email your customers
          </Heading>
          <Text maxW={{ base: "800px", lg: "600px" }} fontSize={{ base: "md", md: "md", lg: "lg" }} lineHeight={"30px"} my={5}>
            Combining e-commerce and email marketing gives you context to finally send emails like you know your customers — because you do.
          </Text>

          {/* Flex */}
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={Pdash} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Send beautiful emails
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Create and send beautifully simple emails to your subscribers using a beautifully simple email editor.
              </Text>
            </Box>
            <Box>
              <Image src={Pointer} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Avoid spam folders
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Increase your delivery rate and reputation without the hassle and land more emails in more inboxes.
              </Text>
            </Box>
          </Flex>

          {/* Second Flex */}
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={ClouDrop} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Targeted broadcasts
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Send personalized emails to every customer and subscriber based on how they interact with your brand.
              </Text>
            </Box>
            <Box>
              <Image src={Refresh} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Email reporting
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Gain insights on email performance from opens to clicks and learn how to continually improve results.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
