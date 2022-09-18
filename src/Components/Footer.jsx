import { Box, Flex, Button, VStack, Icon, Text } from "@chakra-ui/react";
import { MultipleArrows } from "./Icons";

const Footer = () => {
    const Buttons = ["Home", "Gallery", "Support", "Library", "Create new"]
    return (
        <Box bg="black" h="100%">
            <Flex as="ul" pt="70"  direction={{ base: "column", lg:"row"}} gap={22} color="white"justifyContent={"center"} alignContent={"center"}>
                {Buttons.map((eachButton) => {
                return <Button key={eachButton} variant={"ghost"} fontSize="18" _hover={{bg: "transparent"}}> {eachButton} </Button>
                })}
            </Flex>

            <VStack spacing={"5"} pt="110px" pb="100px" color="#99998f" fontWeight={500}>
                <Icon as={MultipleArrows} w={6} h={6} />
                <Text as="p" textAlign={"center"} fontSize={"17"}>
                Nano is a platform where creators publish their world. <br /> Publish your own links in style with nano.site
                </Text>
                <Text as="p">
                © 2022 All Rights Reserved. Terms. Privacy.
                </Text>
                
            </VStack>
        </Box>
    );
}

export default Footer;
