import {
    Button,
    Flex,
    HStack,
    IconButton,
    Image,
    Link,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    UnorderedList,
    VStack,
    useDisclosure
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";
import logo from "../../imgs/logo.png";
import OnceMore from "../../imgs/oncemore_napis.png";

export const Homepage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      backgroundColor="green"
      w="100%"
      alignItems="center"
      minH="100vh"
      flexDirection="column"
    >
      <HStack width="100%" h="15vh" />
      <VStack
        w="100%"
        backgroundColor="white"
        p={{ base: 4, md: 10, lg: 10 }}
        overflowX="hidden"
      >
        <VStack alignItems="flex-start" w="100%">
          <HStack w="full">
            <Image
              onClick={onOpen}
              cursor="pointer"
              py={4}
              src={logo}
              width={{ base: "100px", md: "150px", lg: "150px" }}
            />
            <Image
              src={OnceMore}
              width={{ base: "400px", md: "500px", lg: "600px" }}
            />
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent mx={2}>
                <ModalHeader>O logo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>
                    Nasze logo, to żuk gnojownik🪳 <br />
                    <br />
                    Zachwycił nas swoją mozolną i niezwykle spektakularną pracą.
                    <br />
                    <br />
                    Z odpadów konstruuje kulę. <br />
                    <br />
                    W 100% naturalną i ekologiczną. <br />
                    <br />
                    Toczona kula, kończy swoją podróż w dole, w którym rodzi się
                    nowe życie.
                    <br />
                    <br />
                    To moment kiedy koniec staje się początkiem. <br />
                    <br />
                    Kiedy odpad zmienia swoje przeznaczenie. <br />
                    <br />
                    Jeszcze raz! Once more!
                    <br />
                    <br />
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
          <Text
            w={{ base: "100%", md: "70%", lg: "70%" }}
            h="auto"
            fontSize={{ base: "16px", md: "18px", lg: "18px" }}
          >
            Once more- <br />
            Jeszcze raz! <br /> <br />
            Dla Naszego środowiska, z myślą o przyszłości. <br />
            <br />
            Przerost konsumpcji degraduje Świat, dlatego ponownie podnosimy
            używane i niemodne ubrania. <br />
            <br />
            Każda rzecz, którą odnawiamy, niesie ważne przesłanie. <br />
            <br />
            Nic nie trzeba mówić! Wystarczy założyć! <br />
            <br />
            Ubrania z drugiej ręki na których malujemy, naszywamy i haftujemy -
            alert ekosystemowy. <br />
            <br />
            Więcej wody, drzew, dzikiej przyrody, więcej miłości! <br />
            <br />
            Za dużo, za mocno, za ciasno….w miejscu, w którym żyjemy! <br />
            <br />
            🌍 My stawiamy na promocję ekologicznej świadomości. <br />
            <br />
            Zysk czy przyszłość? Świadomość czy ustawiczny wyścig? Czerwone?
            Szerokie? Krótkie? Dopasowane czy jednak zielone? <br />
            <br />
            Nasze ubrania to filary ogłoszeniowe w przestrzeni
            międzypokoleniowej, to głos boomersa i świadomość milenialsa. <br />{" "}
            <br />
            Nasze ubrania są: <br />
            <UnorderedList>
              <ListItem>świadome</ListItem>
              <ListItem>współczujące</ListItem>
              <ListItem>odpowiedzialne</ListItem>
              <ListItem>odważne</ListItem>
              <ListItem>zuchwałe</ListItem>
            </UnorderedList>
            <br />
            Zero waste! Stay tuned 💚 <br />
            Niech żyje RECYKLING!
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
      <HStack width="100%" h="15vh" />
    </Flex>
  );
};
