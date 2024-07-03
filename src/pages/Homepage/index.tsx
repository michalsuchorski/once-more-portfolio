import {
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  IconButton,
  Link,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import OnceMore from "../../imgs/oncemore_napis.png";
import { Link as ReactLink } from "react-router-dom";
import logo from "../../imgs/logo.png";

export const Homepage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex backgroundColor="green" w="100%" h="100vh" alignItems="center">
      <VStack backgroundColor="white" p={{ base: 4, md: 10, lg: 16 }}  overflowX='hidden'>
        <VStack alignItems="flex-start">
          <HStack w="full">
            <Image
              onClick={onOpen}
              cursor="pointer"
              py={4}
              src={logo}
              width={{ base: "100px", md: "175px", lg: "175px" }}
            />
            <Image
              src={OnceMore}
              width={{ base: "400px", md: "500px", lg: "700px" }}
            />
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent mx={2}>
                <ModalHeader>O logo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                 <Text>
                  Nasze logo, to żuk gnojownik🪳 <br /><br />
                  Zachwycił nas swoją mozolną i niezwykle spektakularną pracą.<br /><br />
                  Z odpadów konstruuje kulę. <br /><br />
                  W 100% naturalną i ekologiczną. <br /><br />
                  Toczona kula, kończy swoją podróż w dole, w którym rodzi się nowe życie.<br /><br />
                  To moment kiedy koniec staje się początkiem. <br /><br />
                  Kiedy odpad zmienia swoje przeznaczenie. <br /><br />
                  Jeszcze raz! Once more!<br /><br />
                  Dla nas najpiękniejsza forma RECYKLINGU ♻️ 
                  </Text>
                  {/* <Text as='mark' whiteSpace='pre-line'>
                  #recycle #recycling #dungbeetle
                  #dungbeetlelogo #zerowaste #zerowastefashion
                  #zerowasteclothing #zerowasteclothes #embroidery
                  </Text> */}
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Zamknij</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </HStack>
          <Text w={{ base: "100%", md: "40%", lg: "40%" }} h="auto">
            BE-NA IS A BRANDING STUDIO LED BY CREATIVE DIRECTOR, BINA ALTERA.
            BE-NA WORKS WITH HEART-CENTERED CHANGE MAKERS AND PURPOSE-LED
            ORIGINAL THINKERS DREAMERS, OVERACHIEVERS AND MISFITS WHO WANT TO
            REACH THEIR AUDIENCE THROUGH THE BEAUTY, RESONANCE AND POWER OF
            DESIGN. IF YOU HAVE A VISION, WE CAN BRING IT TO LIFE.
          </Text>
        </VStack>
        <Flex
          direction={{ base: "column", md: "row", lg: "row" }}
          w="100%"
          textStyle="uppercase"
          color="green.500"
          fontSize="x-large"
          mt={10}
          fontWeight="500"
          letterSpacing="1.5px"
        >
          <HStack mr={8}>
            <IconButton
              isRound={true}
              size="lg"
              fontSize="24px"
              aria-label="instagram"
              icon={<FaInstagram />}
            />
            <IconButton
              isRound={true}
              size="lg"
              fontSize="24px"
              aria-label="facebook"
              icon={<FaFacebookF />}
            />
          </HStack>
          <Flex
            alignItems={{ base: "flex-start", md: "center", lg: "center" }}
            w="100%"
            gap={8}
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            mt={{ base: 8, md: "0px", lg: "0px" }}
          >
            <ReactLink to={`home`}>
              <Link>HOME</Link>
            </ReactLink>
            <Link>BEE</Link>
            <Link>MORE</Link>
            <Link>DODATKI</Link>
            <Button size="lg">KONTAKT</Button>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};
