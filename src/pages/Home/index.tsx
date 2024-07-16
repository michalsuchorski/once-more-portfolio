import {
  Text,
  VStack,
} from "@chakra-ui/react";
import Carousel from "../../components/ImageCarousel";
import { ResponsiveMenu } from "../../components/Menu";


const Home = () => {

  return (
    <>
      <VStack w="100%" justifyContent="center">
        <ResponsiveMenu />
        <VStack w="100%" mt="-40px" h="100%">
          <Carousel />
          <Text fontSize="small" py={2}>
            {" "}
            &copy; 2024 Once More
          </Text>
        </VStack>
      </VStack>
    </>
  );
};

export default Home;
