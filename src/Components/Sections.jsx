import { useState } from "react";
import { Arrow } from "./Icons";
import { Box, Container, Heading, Text, VStack, Button, Icon, Image, Flex } from "@chakra-ui/react";
import "./Component.css";

// Slick for Carousel
import Slider from "react-slick";

// Images
import Phones from "../Images/phones.png";
import Laptop from "../Images/laptop.png";
import Nano from "../Images/hero-img.jpg";
import ClientStudio from "../Images/client-studio.jpg";
import Nikolas from "../Images/flower-dress.jpg";
import Model from "../Images/model.jpg";
import Artist from "../Images/artist.jpg";
import Example from "../Images/example.jpg";

export function Standout() {
  return (
    <>
      <Box minHeight="vh-100" backgroundColor="#fee3bf">
        <Container maxW={"4xl"}>
          <VStack as={Box} textAlign={"center"} spacing={7} pt={{ base: 20, md: 43 }}>
            <Heading as={"h3"} fontWeight={500} fontSize={{ base: "35px", sm: "4xl", md: "6xl" }} lineHeight={"4rem"} w={["95%", "85%"]} mt={6} color="#7d3c00" data-aos="fade-up">
              Stand out from the trees.
            </Heading>
            <Text color={"#ea7f1a"} fontSize={"22px"} fontWeight={600} width={["94%", "70%", "50%"]} mx="auto" data-aos="fade-up">
              Extend your social media profile and keep your links in one place. Create a personal link in bio site for free.
            </Text>
            <Button color={"white"} bg={"#ea7f1a"} rounded={"full"} px={10} py={8} fontSize={20} data-aos="fade-up">
              Get Started
            </Button>

            <Image src={Phones} alt="phones" />
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export function BuildProfile() {
  return (
    <>
      <Box minHeight="vh-100" backgroundColor="#084436">
        <Container maxW={"4xl"}>
          <VStack as={Box} textAlign={"center"} spacing={7} pt={{ base: 20, md: 43 }}>
            <Heading as={"h3"} fontWeight={500} fontSize={{ base: "35px", sm: "4xl", md: "6xl" }} lineHeight={"4rem"} w={["95%", "85%"]} mt={6} color="#c4fae7" data-aos="fade-up">
              Build your profile with smart blocks.
            </Heading>
            <Text as="p" color={"#64e1b5"} fontSize={"22px"} fontWeight={600} w={["95%", "85%", "50%"]} mx="auto" data-aos="fade-up">
              No coding required. Go beyond links with smart cards, text blocks and embeds.
            </Text>
            <Button color={"#084436"} bg={"#c4fae7"} rounded={"full"} px={10} py={8} fontSize={20} data-aos="fade-up">
              Get Started
            </Button>

            <Image src={Laptop} alt="laptop" />
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export function PublishCarousel() {
  // Carousel settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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

  // Hover display event
  const [isNano, setIsNano] = useState(false);
  const [IsStudio, setIsStudio] = useState(false);
  const [IsNikolas, setIsNikolas] = useState(false);
  const [IsModel, setIsModel] = useState(false);
  const [IsArtist, setIsArtist] = useState(false);
  const [IsExample, setIsExample] = useState(false);

  return (
    <>
      <Box minHeight="vh-100" backgroundColor="#f9f5ff">
        <Container maxW={"4xl"} mb={"50px"}>
          <VStack as={Box} textAlign={"center"} spacing={7} pt={{ base: 20, md: 43 }}>
            <Heading fontWeight={500} fontSize={{ base: "35px", sm: "4xl", md: "6xl" }} lineHeight={"4rem"} w={["95%", "85%"]} mt={6} color="#3c0483"  data-aos="fade-up">
              Publish your world with nano.
            </Heading>
            <Text color={"#9665da"} fontSize={"22px"} fontWeight={600} width={["70%", "70%", "50%"]} mx="auto"  data-aos="fade-up">
              Explore some live examples.
            </Text>
            <Button color={"white"} bg={"#3c0483"} rounded={"full"} px={10} py={8} fontSize={20}  data-aos="fade-up" _hover={{bg: "#3c0483"}}>
              Get Started
            </Button>
          </VStack>
        </Container>

        {/* Carousel Cards */}
        <Box cursor={"grab"}>
          {/* Slider */}
          <Slider {...settings}>
            {/* First Carousel- Nano */}
            <Box backgroundImage={`url(${Nano})`} backgroundSize="cover" backgroundRepeat={"no-repeat"} backgroundPosition={"center"} maxW={"420px"} h="410px" w="90%" mx={5} px={10} borderRadius={"10px"} className="hvr-grow">
              <Flex justifyContent={"center"} alignItems={"center"} h="100%" onMouseEnter={() => setIsNano(true)} onMouseLeave={() => setIsNano(false)}>
                {isNano && (
                  <VStack>
                    <Arrow />
                    <Heading as="h3" textAlign="center" color="white">
                      Nano
                    </Heading>
                  </VStack>
                )}
              </Flex>
            </Box>

            {/* Second Carousel - Studio */}
            <Box backgroundImage={`url(${ClientStudio})`} backgroundSize="cover" backgroundRepeat={"no-repeat"} backgroundPosition={"center"} h="410px" w="100px" maxW={"420px"} mx={5} px={10} borderRadius={"10px"} className="hvr-grow">
              <Flex justifyContent={"center"} alignItems={"center"} h="100%" onMouseEnter={(e) => setIsStudio(true)} onMouseLeave={(e) => setIsStudio(false)}>
                {IsStudio && (
                  <VStack>
                    <Arrow />
                    <Heading as="h4" textAlign="center" color="white">
                      Client-Studio
                    </Heading>
                  </VStack>
                )}
              </Flex>
            </Box>

            {/* Third Carousel - Nikolas */}
            <Box backgroundImage={`url(${Nikolas})`} backgroundSize="cover" backgroundRepeat={"no-repeat"} backgroundPosition={"center"} h="410px" w="100px" maxW={"420px"} mx={5} px={10} borderRadius={"10px"} className="hvr-grow">
              <Flex justifyContent={"center"} alignItems={"center"} h="100%" onMouseEnter={(e) => setIsNikolas(true)} onMouseLeave={(e) => setIsNikolas(false)}>
                {IsNikolas && (
                  <VStack>
                    <Arrow />
                    <Heading as="h4" textAlign="center" color="white">
                      Nikolas
                    </Heading>
                  </VStack>
                )}
              </Flex>
            </Box>

            {/* Fourth Carousel -Model */}
            <Box backgroundImage={`url(${Model})`} backgroundSize="cover" backgroundRepeat={"no-repeat"} backgroundPosition={"center"} h="410px" w="100px" maxW={"420px"} mx={5} px={10} borderRadius={"10px"} className="hvr-grow">
              <Flex justifyContent={"center"} alignItems={"center"} h="100%" onMouseEnter={(e) => setIsModel(true)} onMouseLeave={(e) => setIsModel(false)}>
                {IsModel && (
                  <VStack>
                    <Arrow />
                    <Heading as="h4" textAlign="center" color="white">
                      Emilia
                    </Heading>
                  </VStack>
                )}
              </Flex>
            </Box>

            {/* Fifth Carousel - Artist */}
            <Box backgroundImage={`url(${Artist})`} backgroundSize="cover" backgroundRepeat={"no-repeat"} backgroundPosition={"center"} h="410px" w="100px" maxW={"420px"} mx={5} px={10} borderRadius={"10px"} className="hvr-grow">
              <Flex justifyContent={"center"} alignItems={"center"} h="100%" onMouseEnter={(e) => setIsArtist(true)} onMouseLeave={(e) => setIsArtist(false)}>
                {IsArtist && (
                  <VStack>
                    <Arrow />
                    <Heading as="h4" textAlign="center" color="white">
                      Lowe
                    </Heading>
                  </VStack>
                )}
              </Flex>
            </Box>

            {/* Sixth Carousel - Example */}
            <Box backgroundImage={`url(${Example})`} backgroundSize="cover" backgroundRepeat={"no-repeat"} backgroundPosition={"center"} h="410px" w="100px" maxW={"420px"} mx={5} px={10} borderRadius={"10px"} className="hvr-grow">
              <Flex justifyContent={"center"} alignItems={"center"} h="100%" onMouseEnter={(e) => setIsExample(true)} onMouseLeave={(e) => setIsExample(false)}>
                {IsExample && (
                  <VStack>
                    <Arrow />
                    <Heading as="h4" textAlign="center" color="white">
                      Example sites
                    </Heading>
                  </VStack>
                )}
              </Flex>
            </Box>
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export function Reclaim() {
  return (
    <>
      <Box minHeight="vh-100" backgroundColor="#0033ff" mt={"50px"}>
        <Container maxW={"4xl"}>
          <VStack as={Box} textAlign={"center"} spacing={7} pt={{ base: 20, md: 43 }}>
            <Heading color="#f1fdff" fontWeight={500} fontSize={{ base: "35px", sm: "4xl", md: "6xl" }} lineHeight={"4rem"} w={["95%", "85%"]} mt={6}  data-aos="fade-up">
              Reclaim your username for free.
            </Heading>
            <Text color={"#68bdff"} fontSize={"22px"} fontWeight={600} w={["95%", "85%", "50%"]} mx="auto"  data-aos="fade-up">
              Create a free bio site for social and beyond.
            </Text>
            <Button color={"#084436"} bg={"#c4fae7"} rounded={"full"} px={10} py={8} fontSize={20} data-aos="fade-up">
              Get Started
            </Button>

            <Box pt={35}>
              <Icon as={Arrow} />
            </Box>
            <Text as="h2" fontSize={37} pb={20} color="green.300" fontWeight="bold">
              nano.site
              <Text as="span" color="white">
                /you
              </Text>
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export function Support() {
  return (
    <Box minHeight="vh-100" backgroundColor="#343636">
      <Box className="profile">
        <Container maxW={"4xl"} py={30}>
          <VStack as={Box} textAlign={"center"} spacing={4} pt={{ base: 20, md: 43 }}>
            <Heading fontWeight={500} fontSize={{ base: "2xl", sm: "4xl", md: "72px" }} lineHeight={"100%"} width={["80%", "80%", "97%"]} color="white" mt={6} data-aos="fade-up" data-aos-duration="5000" >
              Need support or want to request a feature?
            </Heading>
            <Text color={"white"} fontSize={"24px"} fontWeight={600} width={["70%", "70%", "50%"]} mx="auto"  data-aos="fade-up">
              We love to hear your ideas.
            </Text>
            <Button color={"#084436"} bg={"#c4fae7"} rounded={"full"} px={10} py={8} fontSize={20} data-aos="fade-up">
              Leave a request
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
