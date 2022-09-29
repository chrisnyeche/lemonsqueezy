import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

// Icons

// Semi circle icons
import PinkYelloCircle from "../Icons/bigpink-smallyellocircle.svg";
import BlueSemiCircle from "../Icons/blue180circle.svg";

// Big Balloons Icons
import BalloonBlue from "../Icons/balloonblue.svg"; // balloon for product 1
import BalloonGreen from "../Icons/balloongreen.svg"; // balloon for product 2
import BalloonYellow from "../Icons/balloonyellow.svg"; // balloon for product 3
import BalloonPink from "../Icons/balloonpink.svg"; // balloon for product 4

// Icons for First Products
import Dash from "../Icons/pdash.svg";
import Pointer from "../Icons/ppointer.svg";
import ClouDrop from "../Icons/pcloudrop.svg";
import Refresh from "../Icons/prefresh.svg";

// Icons for Second Products
import Console from "../Icons/pconsole.svg";
import EmailIcon from "../Icons/pemail.svg";
import Divide from "../Icons/pdivid.svg";
import Magnet from "../Icons/pmagnet.svg";

// Icons for Third Products
import Pen from "../Icons/ppen.svg";
import Block from "../Icons/pblock.svg";
import Spiral from "../Icons/pspiral.svg";

// Icons for Fourth products
import BoxIcon from "../Icons/pbox.svg";
import Clock from "../Icons/pclock.svg";
import Invoice from "../Icons/pinvoice.svg";
import Tax from "../Icons/ptax.svg";

// ========= End of Icons =============

// Images
import StoreFront from "../Images/storefront-desktop.jpg";
import CheckOut from "../Images/checkout.jpg"; // image for product 1
import Email from "../Images/email.png"; // image for product 2
import DesignHandBook from "../Images/designhandbook.jpg"; // image for product 3
import Revenue from "../Images/revenue.jpg"; // image for product 4
import RevenueSmall from "../Images/revenue-small.jpg"; // image for product 4

// CSS
import "./Components.css";

// All Features
export default function Features() {
  return (
    <Box as="section">
      <Store />
      <Products1 />
      <Products2 />
      <Products3 />
      <Products4 />
    </Box>
  );
}

// Store Features
function Store() {
  return (
    <Box as="section" h={{ lg: "160vh" }} position="relative" overflow={"hidden"} >

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
      <Box h="650px" w="650px" bg={"#2DCA72"} height={"120px"} width={"120px"} position="absolute" left={"12%"} zIndex={"3"} top={"42%"} rounded="full" display={{ base: "none", lg: "block" }} />

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

// First Product
function Products1() {
  return (
    <>
      <Flex flexDirection={{ base: "column", md: "row" }} alignItems={"center"} h={"fit-content"} gap={{ md: "30px", lg: "65px" }} mt={{base: "20px", md: "0px"}} p={{base: 2, md: "0px"}} >
        {/* Balloon */}
        <Box as="section" position="relative" h={{ base: "fit-content", md: "150vh" }} w={{ base: "100%", lg: "50%" }}>
          {/* Balloon Blue Ellipse" */}
          <Box top={{ md: "50px" }} left={{ md: "-470px" }} right={{ md: "20px" }} position={{ md: "absolute" }} className="rotate" zIndex={{ md: "-1" }}>
            <Image src={BalloonBlue} alt={"Balloon Blue Ellipse"} display={{ base: "none", md: "block" }} />
          </Box>

          {/* Checkout */}
          <Image src={CheckOut} alt={"Checkout image"} zIndex={"1"} w={{ base: "90%", md: "90%", lg: "55%" }} borderRadius="15px" top={{ base: "10px", md: "50px", lg: "260px" }} position={{ md: "absolute" }} left={{ base: "10px", lg: "220px" }} shadow={{ base: "lg", md: "2xl" }} mx="auto" my={3} />

          {/* Yellow Circle */}
          <Box className="floating" border-radius="50%" bg={"#FEC133"} height={"80px"} width={"80px"} position="absolute" left={"180px"} zIndex={"3"} top={{ lg: "550px" }} rounded="full" display={{ base: "none", lg: "block" }} />

          {/* Pink Circle */}
          <Box border-radius="50%" bg={"#FCC5F3"} height={"110px"} width={"110px"} position="absolute" left={"550px"} zIndex={"-1"} bottom={"140px"} rounded="full" display={{ base: "none", lg: "block" }} />
        </Box>

        {/* Text Path */}
        <Box as="section" w={{ base: "100%", lg: "50%" }} pt={{ base: "3%", lg: "25%" }} px={{ base: "2%", lg: "5%" }}>
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
              <Image src={Dash} alt={"Dash Icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Sell your anywhere
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Sell products on any website by embedding your Checkout Overlay or by sharing your Checkout Link.
              </Text>
            </Box>
            <Box>
              <Image src={Pointer} alt={"Pointer Icon"}  />
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
              <Image src={ClouDrop} alt={"Cloud drop Icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Sell your anywhere
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Sell products on any website by embedding your Checkout Overlay or by sharing your Checkout Link.
              </Text>
            </Box>
            <Box>
              <Image src={Refresh} alt={"Refresh Icon"}  />
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

// Second Product
function Products2() {
  return (
    <>
      <Flex flexDirection={{ base: "column", md: "row-reverse" }} alignItems={"center"} h={"fit-content"} gap={{ md: "30px", lg: "65px" }} mt="20px" p={{ base: 2, md: 0 }}>
        {/* Balloon */}
        <Box as="section" position="relative" h={{ base: "fit-content", md: "150vh", lg: "170vh" }} w={{ base: "100%", lg: "50%" }} overflow="hidden">
          {/* Balloon Yellow Ellipse" */}
          <Box top={{ md: "50px" }} right={{ md: "-470px" }} left={{ md: "20px" }} position={{ md: "absolute" }} className="rotate2" zIndex={{ md: "-1" }}>
            <Image src={BalloonYellow} alt={"Balloon Yellow Ellipse"} display={{ base: "none", md: "block" }} />
          </Box>

          {/* Design HandBook */}
          <Image src={DesignHandBook} alt={"Design Handbook image"} zIndex={"1"} w={{ base: "90%", md: "90%", lg: "65%" }} borderRadius="15px" top={{ base: "10px", md: "50px", lg: "260px" }} position={{ md: "absolute" }} left={{ base: "10px", lg: "170px" }} shadow={{ base: "lg", md: "2xl" }} mx="auto" my={3} />

          {/* Orange Circle */}
          <Box className="floating" border-radius="50%" bg={"#ff7344"} height={"80px"} width={"80px"} position="absolute" right={"0px"} zIndex={"3"} top={{ lg: "470px" }} rounded="full" display={{ base: "none", lg: "block" }} />

          {/* Green Circle */}
          <Box border-radius="50%" bg={"#2DCA72"} height={"110px"} width={"110px"} position="absolute" right={"420px"} zIndex={"3"} bottom={"10px"} rounded="full" display={{ base: "none", lg: "block" }} />
        </Box>

        {/* Text Path */}
        <Box as="section" w={{ base: "100%", lg: "50%" }} pt={{ base: "3%", lg: "25%" }} px={{ base: "2%", lg: "5%" }}>
          <Text maxW={"600px"} fontSize="md" color={"#7148eb"} lineHeight={"30px"}>
            Grow your business.
          </Text>
          <Heading as={"h2"} fontSize={{ base: "3xl", lg: "5xl" }} mb={5} color="#25252D" fontWeight={"light"}>
            Market your products
          </Heading>
          <Text maxW={{ base: "800px", lg: "600px" }} fontSize={{ base: "md", md: "md", lg: "lg" }} lineHeight={"30px"} my={5}>
            Grow your audience, build long-lasting customer relationships, and make more sales with powerful, easy-to-use marketing tools.
          </Text>

          {/* Flex Items 1 */}
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={Console} alt={"Console Icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Bundles & Upsells
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Sell your products individually, or bundle them together in unique collections to earn more cash.
              </Text>
            </Box>
            <Box>
              <Image src={EmailIcon} alt={"Email Icon"}  />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Email marketing
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Connect with your audience using one-off emails or create intelligent, data-driven campaigns.
              </Text>
            </Box>
          </Flex>

          {/* Flex Items 2 */}
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={Divide} alt={"Divider Icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Discount codes
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Generate unique coupon codes to reward your customers and nudge visitors closer to a purchase.
              </Text>
            </Box>
            <Box>
              <Image src={Magnet} alt={"Magnet Icon"}  />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Lead magnets
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Gain attention with freebies and “Pay what you want” donations, and turn subscribers into customers.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

// Third Product
function Products3() {
  return (
    <>
      <Flex flexDirection={{ base: "column", md: "row" }} alignItems={"center"} h={"fit-content"} gap={{ md: "30px", lg: "65px" }} mt="20px" p={2}>
        {/* Balloon */}
        <Box as="section" position="relative" h={{ base: "fit-content", md: "150vh" }} w={{ base: "100%", lg: "50%" }}>
          {/* Balloon Green Ellipse" */}
          <Box top={{ md: "50px" }} left={{ md: "-470px" }} right={{ md: "20px" }} position={{ md: "absolute" }} className="rotate" zIndex={{ md: "-1" }}>
            <Image src={BalloonGreen} alt={"Balloon Green Ellipse"} display={{ base: "none", md: "block" }} />
          </Box>
          {/* Yellow Circle */}
          <Box className="floating" border-radius="50%" bg={"#FEC133"} height={"150px"} width={"150px"} position="absolute" left={"109px"} zIndex={"1"} top={{ lg: "550px" }} rounded="full" display={{ base: "none", lg: "block" }} />

          {/* Pink Circle */}
          <Box border-radius="50%" bg={"#FCC5F3"} height={"100px"} width={"100px"} position="absolute" left={"520px"} zIndex={"2"} bottom={"15px"} rounded="full" display={{ base: "none", lg: "block" }} />

          {/* Email*/}
          <Image src={Email} alt={"Checkout image"} zIndex={"1"} w={{ base: "90%", md: "90%", lg: "65%" }} top={{ base: "10px", md: "270px", lg: "320px" }} position={{ md: "absolute" }} left={{ base: "10px", md: "5px", lg: "160px" }} shadow={{ base: "lg", md: "2xl" }} mx="auto" my={3} />
        </Box>

        {/* Text Path */}
        <Box as="section" w={{ base: "100%", lg: "50%" }} pt={{ base: "3%", lg: "25%" }} px={{ base: "2%", lg: "5%" }}>
          <Text maxW={"600px"} fontSize="md" color={"#7148eb"} lineHeight={"30px"}>
            Email for your business
          </Text>
          <Heading as={"h2"} fontSize={{ base: "3xl", lg: "5xl" }} mb={5} color="#25252D" fontWeight={"light"}>
            Email your customers
          </Heading>
          <Text maxW={{ base: "800px", lg: "600px" }} fontSize={{ base: "md", md: "md", lg: "lg" }} lineHeight={"30px"} my={5}>
            Combining e-commerce and email marketing gives you context to finally send emails like you know your customers — because you do.
          </Text>

          {/* Flex Item1 */}
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={Pen} alt={"Pen icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Send beautiful emails
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Create and send beautifully simple emails to your subscribers using a beautifully simple email editor.
              </Text>
            </Box>
            <Box>
              <Image src={Block} alt={"Block Icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Avoid spam folders
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Increase your delivery rate and reputation without the hassle and land more emails in more inboxes.
              </Text>
            </Box>
          </Flex>

          {/* Flex Item2 */}
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={Spiral} alt={"Spiral Icon"}/>
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Targeted broadcasts
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Send personalized emails to every customer and subscriber based on how they interact with your brand.
              </Text>
            </Box>
            <Box>
              <Image src={Dash} alt={"Dash Icon"} />
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

// Fourth Product
function Products4() {
  return (
    <>
      <Flex flexDirection={{ base: "column", md: "row-reverse" }} alignItems={"center"} h={"fit-content"} gap={{ md: "30px", lg: "65px" }} mt="20px" p={{ base: 2, md: 0 }}>
        {/* Balloon */}
        <Box as="section" position="relative" h={{ base: "fit-content", md: "150vh", lg: "173vh" }} w={{ base: "100%", lg: "50%" }} overflow="hidden">
          {/* Balloon Pink Ellipse" */}
          <Box top={{ md: "50px" }} right={{ md: "-470px" }} left={{ md: "20px" }} position={{ md: "absolute" }} className="rotate2" zIndex={{ md: "-1" }}>
            <Image src={BalloonPink} alt={"Balloon Pink Ellipse"} display={{ base: "none", md: "block" }} />
          </Box>

          {/* Revenue image */}
          <Image src={Revenue} alt={"Revenue image"} zIndex={"1"} w={{ base: "90%", md: "90%", lg: "65%" }} borderRadius="15px" top={{ base: "10px", md: "50px", lg: "260px" }} position={{ md: "absolute" }} left={{ base: "10px", lg: "170px" }} shadow={{ base: "lg", md: "2xl" }} mx="auto" my={3} />

          {/* Small revenue image  */}
          <Image src={RevenueSmall} alt={"Small revenue image"} zIndex={"2"} w={{ base: "90%", md: "60%", lg: "40%" }} borderRadius="5px" top={{ base: "10px", md: "310px", lg: "470px" }} position={{ md: "absolute" }} right={"0px"} shadow={{ base: "lg", md: "2xl" }} ms={{ base: "14px", md: 0 }} />

          {/* Red Circle */}
          <Box className="floating" border-radius="50%" bg={"#eb3b67"} height={"150px"} width={"150px"} position="absolute" right={"20px"} zIndex={"-1"} top={{ lg: "370px" }} rounded="full" display={{ base: "none", lg: "block" }} />


        {/* Pink Semicircle */}
        <Box bg={"#00a8f9"} display={{ base: "none", lg: "block" }} transform="rotate(0deg)" bottom="60px" left="110px" h="75px" zIndex={-1} w="150px" position={"absolute"} borderRadius={"150px 150px 0 0"}></Box> 
        </Box>

        {/* Text Path */}
        <Box as="section" w={{ base: "100%", lg: "50%" }} pt={{ base: "3%", lg: "25%" }} px={{ base: "2%", lg: "5%" }}>
          <Text maxW={"600px"} fontSize="md" color={"#7148eb"} lineHeight={"30px"}>
            Manage your business.
          </Text>
          <Heading as={"h2"} fontSize={{ base: "3xl", lg: "5xl" }} mb={5} color="#25252D" fontWeight={"light"}>
            One simple platform
          </Heading>
          <Text maxW={{ base: "800px", lg: "600px" }} fontSize={{ base: "md", md: "md", lg: "lg" }} lineHeight={"30px"} my={5}>
            Replace dozens of tools, save money, and manage your entire ecommerce business from anywhere with one simple platform.
          </Text>

          {/* Flex Items 1 */}
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={BoxIcon} alt={"Box Icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                All-in-one toolkit
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                All the innovative tools you need to launch a lucrative digital product business in one neat little package.
              </Text>
            </Box>
            <Box>
              <Image src={Clock} alt={"Clock Icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Business insights
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
                Learn how to go further and faster with valuable customer insights and product performance reports.
              </Text>
            </Box>
          </Flex>

          {/* Flex Items 2 */}
          <Flex gap={5} my={"66px"} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image src={Invoice} alt={"Invoice Icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
                Invoicing
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
              Offer your customers beautiful invoices that can be generated at any time with just a few clicks.
              </Text>
            </Box>
            <Box>
              <Image src={Tax} alt={"Tax icon"} />
              <Heading as={"h6"} fontSize="xl" color="#25252D" my={3}>
              Tax compliance
              </Heading>
              <Text maxW={{ base: "400px", lg: "300px" }} lineHeight={"30px"}>
              Stop worrying about complying with International Tax Law. Sales Tax and EU VAT is handled for you.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
