import { Text, VStack, HStack, Image, Link, Box } from "@chakra-ui/react";
import logo from "../../imgs/logo.jpg";



export const Home = () => {
  return (
    <VStack w="100%" justifyContent="center">
      <HStack
        justifyContent="space-between"
        w="100%"
        maxW="1440px"
        px={28}
        py={4}
      >
        <Image src={logo} w="150px" />
        <HStack gap={6} fontSize="large">
          <Link color='green.500'>HOME</Link>
          <Link>BEE</Link>
          <Link>MORE</Link>
          <Link>DODATKI</Link>
        </HStack>
      </HStack>
      <VStack w="100%">
        <Text fontSize="x-large">Once More</Text>
        {/* add carousele */}
        <Box boxSize='800px' bg='black' color='white'>
            There will be a carousele
        </Box>
        <Text fontSize='small' py={2}> &copy; 2024 Once More</Text>
      </VStack>
    </VStack>
  );
};
