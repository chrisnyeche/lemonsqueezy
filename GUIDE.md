## DETAILS

**APP NAME: [NanoClone]
**FONT: [EloquiaDisplay] -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
**IMAGES: 7 images
**ICON: 1 icon
\*\*NEW PACKAGES: React Slick

## STEPS

1. Install all the fonts and download all the images,
2. Import the fonts and rename the images to match naming convention.
3. Added Header Componenent for both Navbar and Hero section.
4. Added Background image to the header section

## CHALLENGES

1. To use background images in Chakra Ui that are not links, you need to:
   i. import the image
   import heroImage from "../Images/hero-img.jpg";

ii. Declare background image as a variable
const backgroundImageHero = `url(${heroImage})`;
<Image src={`${url}`} />

iii. Call the variable as the background image
backgroundImage={backgroundImageHero}

2. onHover Display Box
   i. Declare useState
   const [isShown, setIsShown] = useState(false);
   ii. Set states with mouse enter nad mouse leave events
   <Flex justifyContent={"center"} alignItems={"center"} h="100%" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
   {isShown && (
   <Box>
   <Arrow />
   <Heading as="h3" textAlign="center" color="white">
   {" "}
   Nano{" "}
   </Heading>
   </Box>
   )}
   </Flex>
