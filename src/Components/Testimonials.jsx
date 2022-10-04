import { Component } from "react";
import { Box, Flex, Heading, Text, Button, Center, Image } from "@chakra-ui/react";

// Slick for Carousel
import Slider from "react-slick";

// Images
import Avatars from "../Images/supportavatars.png";
import BalloonLightBlue from "../Icons/balloonlightblue.svg";
import RoundBlue from "../Images/roundblue.png";
import Tablet from "../Images/tablet.png";

// Icons
import { CgArrowLongRight, CgArrowRight, CgArrowLeft } from "react-icons/cg";
import Stars from "../Icons/pstars.svg";
import Award from "../Icons/paward.svg";
import Sun from "../Icons/psun.svg";
import ClouDrop from "../Icons/pcloudrop.svg";
import Cup from "../Icons/pcup.svg";
import Chat from "../Icons/pchatbox.svg";
import Star from "../Icons/pstar.svg";
import Crown from "../Icons/pcrown.svg";
import Heart from "../Icons/pheart.svg";
import Bolt from "../Icons/pbolt.svg";
import Key from "../Icons/pkey.svg";

// All Testimonial
export default function Testimonials() {
  return (
    <Box as="section">
      <Carousel />
      <Support />
      <Analysis />
    </Box>
  );
}

// Carousel
export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      // dots: false,
      arrows: false,
      // className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "16px",
      speed: 500,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const testimonialCards = [
      {
        icon: Stars,
        text: "Imagine having a team of designers, developers, email marketers, and tax accountants behind you. That’s how Lemon Squeezy feels, letting you focus on creating your digital products.",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-shahadat.jpg?version=1.8.1",
        name: "Shahadat Rahman",
        acct: "@HiShahadat",
      },
      {
        icon: Award,
        text: "Lemon Squeezy has surpassed my expectations, and I’ve made the decision to move all my chips in on this platform for the long haul. The product is beautifully designed and a joy to use.",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-ridd.jpg?version=1.8.1",
        name: "Michael Riddering",
        acct: "figma.academy",
      },
      {
        icon: Sun,
        text: "I’ve never come across a platform that has made it SO easy-peasy to start selling. Lemon Squeezy is full of beautiful surprises, and it’s a genuine joy to use!",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-rachel.jpg?version=1.8.1",
        name: "Rachel Shillcock",
        acct: "@MissRachilli",
      },
      {
        icon: ClouDrop,
        text: "It’s refreshing to see Lemon Squeezy focusing solely on digital products. Giving you all the necessary tools you’ll need to start selling your products and subscriptions quickly and easily.",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-ian.jpg?version=1.8.1",
        name: "Ian Barnard",
        acct: "@ian_barnard",
      },
      {
        icon: Cup,
        text: "It's so good to have a system focused on digital products, and it took me no time at all to allow customers to buy fonts straight from my website. There's so much potential. I can't wait to see what's next!",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-typeheist.jpg?version=1.8.1",
        name: "TypeHeist",
        acct: "typeHeist.co",
      },
      {
        icon: Chat,
        text: "Lemon Squeezy had the perfect combination of features for selling my first software product. It’s been so easy to set up, and customer support has been amazing.",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-ross.jpg?version=1.8.1",
        name: "Ross Wintle",
        acct: "turbo-admin.com",
      },
      {
        icon: Star,
        text: "Lemon Squeezy made setting up a store and selling digital products super easy and fun. No more clunky plugins to manage or taxes to worry about. Lemon Squeezy does everything I need and more",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-mike.jpg?version=1.8.1",
        name: "Mike McAlister",
        acct: "liftoffcourse.com",
      },
      {
        icon: Crown,
        text: "Lemon Squeezy is the best option for selling digital products. I experienced the way things work, and wow, are you kidding me! Lemon squeezy is gonna change the industry!",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-eren.jpg?version=1.8.1",
        name: "Eren T",
        acct: "@ertuken",
      },
      {
        icon: Heart,
        text: "I made my first $99/yr sale within the first hour of setup! Finally, an all-in-one solution for makers with multiple products, with the ability to sell with both subscription and one-off pricing. Incredible.",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-rob.jpg?version=1.8.1",
        name: "Rob Hope",
        acct: "onepagelove.com",
      },
      {
        icon: Bolt,
        text: "When launching Iconic, Lemon Squeezy literally took care of everything. No need to think about taxes, VAT, license keys, etc. The setup really was easy-peasy.",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-james.jpg?version=1.8.1",
        name: "James McDonald",
        acct: "iconic.app",
      },
      {
        icon: Key,
        text: "Lemon Squeezy is exactly what I have been looking for. The license key management and recurring payments have streamlined my business, and I am looking forward to seeing the platform grow.",
        src: "https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/avatar-eren.jpg?version=1.8.1",
        name: "UiPress",
        acct: "uiPress.com",
      },
    ];

    return (
      <Box h={"fit-content"} bg="#35389d" position={"relative"} py={2} overflow="hidden">
        {/* Blue large Circle */}
        <Box border-radius="50%" bg={"#00ACFF"} height={"900px"} width={"900px"} position="absolute" left={"-250px"} top={"550px"} zIndex={"0"} rounded="full"></Box>

        {/* Pink Semicircle */}
        <Box bg={"RGB(254, 194, 246)"} display={{ base: "none", lg: "block" }} transform="rotate(180deg)" top={"0px"} right="110px" h="105px" w="210px" position={"absolute"} borderRadius={"150px 150px 0 0"} />

        {/* Text Content */}
        <Flex px={{ base: "24px", lg: "148px" }} py={{ base: "24px", lg: "68px" }} flexDirection={{ base: "column", lg: "row" }} justifyContent={"space-between"} alignItems="self-end">
          {/* Text path */}
          <Box maxW={"650px"} lineHeight={10} pt={"48px"}>
            <Text color={"#ffc233"}> A home for your business</Text>
            <Heading as="h2" fontWeight={"400"} fontSize={{ base: "32px", md: "48px" }} color="white">
              Join your fellow creators
            </Heading>
            <Text fontSize={"18px"} color={"#AEAFD8"} lineHeight={7} my={3}>
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
              px={"60px"}
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

        {/* Carousel */}
        <Box zIndex={"3"}>
          <Slider ref={(c) => (this.slider = c)} {...settings} gap={5}>
            {/* Testimonial Card */}
            {testimonialCards.map((card) => {
              return (
                <Box as="section" h="550px" w="300px" p="5" key={card.name} zIndex={2}>
                  <Box bg={"white"} h={{ base: "500px", md: "480px", lg: "385px" }} w={{ base: "275px", sm: "200px", md: "305px", lg: "255px" }} mx="auto" lineHeight="32px" p="5" borderRadius={"15px"}>
                    <Box h="82%">
                      <Image src={card.icon} alt={card.icon} />
                      <Text fontSize={"14px"} mt={3} mb={6}>
                        {card.text}
                      </Text>
                    </Box>
                    {/* Avatar & Link */}
                    <Center gap={5}>
                      <Image src={card.src} alt={card.src} rounded="full" w={"50px"} h="50px" />
                      <Box>
                        <Text fontSize={"14px"}>
                          {card.name}
                          <Text color={{ base: "black", lg: "#BCC0CF" }}>{card.acct}</Text>
                        </Text>
                      </Box>
                    </Center>
                  </Box>
                </Box>
              );
            })}
          </Slider>

          {/* Previous & Next Buttons */}
          <Center mb={5}>
            <Button borderRadius={"50%"} p="2" h="50px" w="50px" onClick={this.previous} mx="5">
              <CgArrowLeft fontSize={"22px"} />
            </Button>
            <Button borderRadius={"50%"} p="2" h="50px" w="50px" onClick={this.next}>
              <CgArrowRight fontSize={"22px"} />
            </Button>
          </Center>
        </Box>
      </Box>
    );
  }
}

// Support
export function Support() {
  return (
    <Box as="section" h={{ base: "180vh", md: "120vh", lg: "130vh" }} mx="auto" display={"flex"} alignItems={"center"} position={"relative"} overflow="hidden">
      <Center flexDirection={{ base: "column", md: "row" }} p={5} alignItems={"center"} justifyContent={"space-between"} gap={"50px"}>
        {/* Balloon Light Blue */}
        <Image src={BalloonLightBlue} transform={"rotate(143deg)"} alt={"Balloon Light Blue"} position="absolute" left={"-325px"} top={"-600px"} zIndex={"0"} display={{ base: "none", lg: "flex" }} />

        {/* Support Image */}
        <Flex justifyContent={{ base: "center", lg: "end" }} className={"floating"}>
          <Image src={Avatars} alt={"Support Avatars"} w={{ base: "100%", lg: "80%" }} />
        </Flex>

        {/* Support Text */}
        <Box zIndex={1}>
          <Text maxW={"600px"} fontSize="md" color={"#7148eb"} lineHeight={"30px"}>
            Support for your business
          </Text>
          <Heading as={"h2"} fontSize={{ base: "3xl", lg: "5xl" }} mb={5} color="#25252D" fontWeight={"light"}>
            We’re here to help
          </Heading>
          <Text maxW={{ base: "800px", lg: "600px" }} fontSize={{ base: "md", md: "md", lg: "lg" }} lineHeight={"30px"} my={5}>
            Invest in your business with peace of mind that we're here for you whether you need tech support or business advice.
          </Text>

          {/* Gray Boxes */}
          {/* Box1 */}
          <Box h={{ base: "fit-content", lg: "235px" }} w={{ base: "100%", lg: "80%" }} bg="#F7F7F9" borderRadius={"25px"} ps={{ lg: 5 }} p={{ base: 5 }} my={4}>
            <Center>
              {/* Text */}
              <Box>
                <Heading as={"h3"} fontSize={"xl"} mb={5} color="#25252D" fontWeight={"600"}>
                  A Creator’s Guide
                </Heading>
                <Text maxW={"600px"} fontSize={"16px"} lineHeight={"30px"} my={5}>
                  Download the creator’s guide to making money online selling digital products.
                </Text>
                <Button
                  fontSize={"sm"}
                  fontWeight={400}
                  color={"white"}
                  py={5}
                  px={"30px"}
                  borderRadius={"30px"}
                  bg={"#7047EB"}
                  href={"#"}
                  _hover={{
                    bg: "#7047EB",
                  }}
                >
                  Grab your free guide
                </Button>
              </Box>
              {/* Image */}
              <Box>
                <Image src={"https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/creators-guide.jpg?version=1.8.1"} alt={"Book Image"} w={"95%"} />
              </Box>
            </Center>
          </Box>

          {/* Box2 */}
          <Box h={{ base: "fit-content", lg: "235px" }} w={{ base: "100%", lg: "80%" }} bg="#F7F7F9" borderRadius={"25px"} ps={{ lg: 5 }} p={{ base: 5 }} my={4}>
            <Center>
              {/* Text */}
              <Box>
                <Heading as={"h3"} fontSize={"xl"} mb={5} color="#25252D" fontWeight={"600"}>
                  A Creator’s Guide
                </Heading>
                <Text maxW={"600px"} fontSize={"16px"} lineHeight={"30px"} my={5}>
                  Download the creator’s guide to making money online selling digital products.
                </Text>
                <Button
                  fontSize={"sm"}
                  fontWeight={400}
                  color={"white"}
                  py={5}
                  px={"30px"}
                  borderRadius={"30px"}
                  bg={"#7047EB"}
                  href={"#"}
                  _hover={{
                    bg: "#7047EB",
                  }}
                >
                  Grab your free guide
                </Button>
              </Box>
              {/* Image */}
              <Box>
                <Image src={"https://www.lemonsqueezy.com/wp-content/themes/lemonsqueezy/images/creators-guide.jpg?version=1.8.1"} alt={"Book Image"} w={"95%"} />
              </Box>
            </Center>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

// Analysis
export function Analysis() {
  return (
    <Box as="section" h={{ base: "90vh", md: "120vh", lg: "150vh" }} mx="auto" alignItems={"center"} position={"relative"} overflow="hidden" bg="#7047EB">

      {/* Yellow large Circle */}
      <Box border-radius="50%" bg={"#FFC233"} height={"900px"} width={"900px"} position="absolute" left={{base: "-270px", lg: "-180px"}} top={{base: "370px", lg: "580px"}} zIndex={"0"} rounded="full"/>

      {/* Pink large Circle */}
      <Box border-radius="50%" bg={"#FCC5F3"} height={"500px"} width={"500px"} position="absolute" right={{base:"-290px", md: "-90px", lg: "-50px"}} top={{base:"360px", lg: "580px"}} zIndex={"0"} rounded="full" className={"floating"} />

      {/* Blue Semicircle */}
      <Box display={{ base: "none", lg: "block" }} transform={"rotate(3deg)"} top={"-20px"} left="55px" h="155px" w="157px" position={"absolute"}>
        <Image src={RoundBlue} alt={"Round Blue"} />
      </Box>

      {/* Tablet */}
      <Box top={{ base: "60%", md: "50%", lg: "35%" }} position={"absolute"} zIndex={2}>
        <Image src={Tablet} alt={"Tablet of Analysis"} w="100%" />
      </Box>

      {/* Text Content */}
      <Flex py={{ base: "24px", lg: "89px" }} flexDirection={{ base: "column", lg: "row" }} justifyContent={"space-between"} alignItems="center" maxW={{ base: "90%", md: "80%", lg: "60%" }} mx="auto">

        {/* Text path */}
        <Box maxW={{ base: "100%", lg: "520px" }} lineHeight={"70px"}>
          <Text color={"#ffc233"} fontWeight={"500"}>
            Elevate your business
          </Text>
          <Heading as="h2" fontWeight={"400"} fontSize={{ base: "24px", md: "40px", lg: "44px" }} color="white">
            Take your business to the next level with Lemon Squeezy
          </Heading>
        </Box>

        {/* Button */}
        <Box textAlign={"center"} my={{ base: "40px", md: "15px" }}>
          {/* Get Started */}
          <Button
            fontSize={"sm"}
            fontWeight={400}
            bg={"white"}
            py={8}
            px={"50px"}
            borderRadius={"30px"}
            rightIcon={<CgArrowLongRight fontSize={"38px"} />}
            href={"#"}
            _hover={{
              color: "#7047eb",
            }}
          >
            Get Started
          </Button>
          <Text color={"#AEAFD8"} fontSize={"14px"} lineHeight={7} my={3}>
            No credit card required
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
