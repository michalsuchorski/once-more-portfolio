import "./App.css";
import {
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
function App() {
  return (
    <Flex backgroundColor="red" w="100%" h="100vh" alignItems="center">
      <VStack backgroundColor="white" h="55vh" p={16}>
        <VStack alignItems="flex-start">
          <Text fontSize="90px">ONCE MORE</Text>
          <Text w='50%' h='auto' mt='-35px'>
            BE-NA IS A BRANDING STUDIO LED BY CREATIVE DIRECTOR, BINA ALTERA.
            BE-NA WORKS WITH HEART-CENTERED CHANGE MAKERS AND PURPOSE-LED
            ORIGINAL THINKERS DREAMERS, OVERACHIEVERS AND MISFITS WHO WANT TO
            REACH THEIR AUDIENCE THROUGH THE BEAUTY, RESONANCE AND POWER OF
            DESIGN. IF YOU HAVE A VISION, WE CAN BRING IT TO LIFE.
          </Text>
        </VStack>
        <HStack
          w="100%"
          textStyle="uppercase"
          color="red.500"
          fontSize="x-large"
          mt={10}
          spacing={5}
          fontWeight="500"
          letterSpacing="1.5px"
        >
          <HStack>
            <IconButton
              colorScheme="red"
              isRound={true}
              size="lg"
              fontSize="24px"
              aria-label="instagram"
              icon={<FaInstagram />}
            />
            <IconButton
              colorScheme="red"
              isRound={true}
              size="lg"
              fontSize="24px"
              aria-label="facebook"
              icon={<FaFacebookF />}
            />
          </HStack>
          <Link>ABOUT</Link>
          <Link>BEE</Link>
          <Link>MORE</Link>
          <Link>DODATKI</Link>
          <Button size='lg'>KONTAKT</Button>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default App;
