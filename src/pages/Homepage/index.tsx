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
  useDisclosure,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";
import logo from "../../imgs/logo.png";
import OnceMore from "../../imgs/oncemore_napis.png";
import { BackgroundImages } from "../../components/BackgroundImages";
import { useState, useEffect, useRef } from "react";
import { Loader } from "../../components/Loader";
import FontFaceObserver from "fontfaceobserver";

const useFontLoader = (fontName: string, weight: string) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      const font = new FontFaceObserver(fontName, {
        weight,
      });
      try {
        await font.load();
        console.log("LOADED", fontName, weight);
        setFontsLoaded(true);
      } catch (error) {
        console.error("Failed to load fonts", error);
      }
    };

    loadFonts();
  }, [fontName]);

  return fontsLoaded;
};

const Homepage = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const someElementRef = useRef<HTMLDivElement | null>(null);

  const [isLogoLoaded, setIsLogoLoaded] = useState<boolean>(false);
  const fontsLoaded = useFontLoader("Fira Mono", "400");
  const fontsLoaded2 = useFontLoader("Fira Mono", "500");

  const [showLoader, setShowLoader] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (fontsLoaded && fontsLoaded2) {
      setShowLoader(false);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }

    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        setShowLoader(false);

        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }, 3000);
    }
  }, [fontsLoaded, fontsLoaded2]);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <>
      <Flex
        ref={someElementRef}
        w="100%"
        alignItems="center"
        minH="100vh"
        flexDirection="column"
      >
        <HStack width="100%" h="300px" zIndex="0">
          <BackgroundImages />
        </HStack>
        <VStack
          zIndex="1"
          w="100%"
          backgroundColor="white"
          p={{ base: 4, md: 10, lg: 10 }}
          overflowX="hidden"
        >
          <VStack alignItems="flex-start" w="100%">
            <HStack w="full" minH={{ base: "200px" }}>
              <Image
                onClick={onOpen}
                cursor="pointer"
                py={4}
                src={logo}
                width={{ base: "100px", md: "150px", lg: "150px" }}
                opacity={isLogoLoaded ? 1 : 0}
                transition="opacity 0.3s ease-in-out"
                onLoad={() => {
                  setIsLogoLoaded(true);
                }}
              />
              <Image
                src={OnceMore}
                width={{ base: "400px", md: "500px", lg: "600px" }}
              />
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
              Ubrania z drugiej ręki na których malujemy, naszywamy i haftujemy
              - alert ekosystemowy. <br />
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
              międzypokoleniowej, to głos boomersa i świadomość milenialsa.{" "}
              <br /> <br />
              Nasze ubrania są: <br />
            </Text>
            <UnorderedList>
              <ListItem>świadome</ListItem>
              <ListItem>współczujące</ListItem>
              <ListItem>odpowiedzialne</ListItem>
              <ListItem>odważne</ListItem>
              <ListItem>zuchwałe</ListItem>
            </UnorderedList>
            <Text>
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
              <ReactLink to={`home`}>HOME</ReactLink>
              <Link>MARYNARKI</Link>
              <Link>KOSZULE</Link>
              <Link>SUKIENKI</Link>
              <Link>O NAS</Link>
              <Button size="lg">KONTAKT</Button>
            </Flex>
          </Flex>
        </VStack>
        <HStack
          width="100%"
          h={{ base: "0vh", sm: "0vh", md: "300px", lg: "300px" }}
          overflow="hidden"
        >
          <BackgroundImages />
        </HStack>
      </Flex>

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
              Toczona kula, kończy swoją podróż w dole, w którym rodzi się nowe
              życie.
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
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Zamknij</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Homepage
