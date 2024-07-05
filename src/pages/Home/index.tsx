import { Text, VStack, HStack, Image, Link } from "@chakra-ui/react";
import logo from "../../imgs/logo.png";


export const Home = () => {

  return (
    <VStack w="100%" justifyContent="center" h='100vh'>
      <HStack
        justifyContent="space-between"
        w="100%"
        maxW="1440px"
        px={28}
        py={4}
      >
        <Image src={logo} w="150px" />
        <HStack gap={6} fontSize="x-large">
          <Link color='green.500'>HOME</Link>
          <Link>BEE</Link>
          <Link>MORE</Link>
          <Link>DODATKI</Link>
        </HStack>
      </HStack>
      <VStack w="100%" mt='-20px' h='100%'>
        <Text fontSize="x-large">Once More</Text>
        <Text fontSize='small' py={2}> &copy; 2024 Once More</Text>
      </VStack>
    </VStack>
  );
};
