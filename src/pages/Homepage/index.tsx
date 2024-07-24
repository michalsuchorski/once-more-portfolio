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
import OnceMore from "../../imgs/oncemore_napis.gif";
import { BackgroundImages } from "../../components/BackgroundImages";
import { useState, useEffect, useRef } from "react";
import { Loader } from "../../components/Loader";
import FontFaceObserver from "fontfaceobserver";


import bg1 from '../../pages/Home/backgroundImages/bg1.jpeg'
import bg2 from '../../pages/Home/backgroundImages/bg2.jpeg'
import bg3 from '../../pages/Home/backgroundImages/bg3.jpeg'
import bg4 from '../../pages/Home/backgroundImages/bg4.jpeg'
import bg5 from '../../pages/Home/backgroundImages/bg5.jpeg'
import bg6 from '../../pages/Home/backgroundImages/bg6.png'
import bg7 from '../../pages/Home/backgroundImages/bg7.jpeg'
import bg8 from '../../pages/Home/backgroundImages/bg8.jpg'
import bg9 from '../../pages/Home/backgroundImages/bg9.jpg'
import bg10 from '../../pages/Home/backgroundImages/bg10.jpg'
import bg11 from '../../pages/Home/backgroundImages/bg11.jpg'
import bg12 from '../../pages/Home/backgroundImages/bg12.jpg'
import bg13 from '../../pages/Home/backgroundImages/bg13.jpg'
import bg14 from '../../pages/Home/backgroundImages/bg14.jpg'
import bg15 from '../../pages/Home/backgroundImages/bg15.jpg'
import bg16 from '../../pages/Home/backgroundImages/bg16.jpg'

import bg17 from '../../pages/Home/backgroundImages/bg17.jpg'
import bg18 from '../../pages/Home/backgroundImages/bg18.jpg'
import bg19 from '../../pages/Home/backgroundImages/bg19.jpg'
import bg20 from '../../pages/Home/backgroundImages/bg20.png'
import bg21 from '../../pages/Home/backgroundImages/bg21.png'
import bg22 from '../../pages/Home/backgroundImages/bg22.png'
import bg23 from '../../pages/Home/backgroundImages/bg23.png'
import bg24 from '../../pages/Home/backgroundImages/bg24.png'
import bg25 from '../../pages/Home/backgroundImages/bg25.png'
import bg26 from '../../pages/Home/backgroundImages/bg26.png'
import bg27 from '../../pages/Home/backgroundImages/bg27.png'
import bg28 from '../../pages/Home/backgroundImages/bg28.png'
import bg29 from '../../pages/Home/backgroundImages/bg29.png'
import bg30 from '../../pages/Home/backgroundImages/bg30.png'
import bg31 from '../../pages/Home/backgroundImages/bg31.png'
import bg32 from '../../pages/Home/backgroundImages/bg32.png'






const bgImages = [
  bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15, bg16
];

const bgImages2 = [
  bg17, bg18, bg19, bg20, bg21, bg22, bg23, bg24, bg25, bg26, bg27, bg28, bg29, bg30, bg31, bg32 
]

const useFontLoader = (fontName: string) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      const font = new FontFaceObserver(fontName)
      try {
        await font.load();
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

  const [isLogoLoaded, setIsLogoLoaded] = useState<boolean>(false);
  const fontsLoaded = useFontLoader("Noto Sans");

  const [showLoader, setShowLoader] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (fontsLoaded) {
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
  }, [fontsLoaded]);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <>
      <Flex
        w="100%"
        alignItems="center"
        minH="100vh"
        flexDirection="column"
      >
        <HStack width="100%" maxH={{ base: '300px', md: 'none'}}>
          <BackgroundImages images={bgImages} />
        </HStack>
        <VStack
          w="100%"
          backgroundColor="white"
          p={{ base: 4, md: 10, lg: 10 }}
          overflowX="hidden"
        >
          <VStack alignItems="flex-start" w="100%" mt={-12}>
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
                opacity={isLogoLoaded ? 1 : 0}
                transition="opacity 0.3s ease-in-out"
                onLoad={() => {
                  setIsLogoLoaded(true);
                }}
              />
            </HStack>
            <Text
              mt={{ base: -12, md: -6}}
              w={{ base: "100%", md: "70%", lg: "50%" }}
              h="auto"
              fontSize={{ base: "16px", md: "18px", lg: "18px" }}
              textAlign='justify'   
              sx={{ 'text-justify': 'inter-word'}}
              
            >
              Once more-
              Jeszcze raz!
              Dla Naszego środowiska, z myślą o przyszłości. 
              
              Przerost konsumpcji degraduje Świat, dlatego ponownie podnosimy
              używane i niemodne ubrania. 
              
              Każda rzecz, którą odnawiamy, niesie ważne przesłanie. 
              
              Nic nie trzeba mówić! Wystarczy założyć! 
              
              Ubrania z drugiej ręki na których malujemy, naszywamy i haftujemy
              - alert ekosystemowy. 
              
              Więcej wody, drzew, dzikiej przyrody, więcej miłości! 
              
              Za dużo, za mocno, za ciasno….w miejscu, w którym żyjemy! 
              
              🌍 My stawiamy na promocję ekologicznej świadomości. 
              
              Zysk czy przyszłość? Świadomość czy ustawiczny wyścig? Czerwone?
              Szerokie? Krótkie? Dopasowane czy jednak zielone? 
              
              Nasze ubrania to filary ogłoszeniowe w przestrzeni
              międzypokoleniowej, to głos boomersa i świadomość milenialsa.{" "}
               
              Nasze ubrania są: 
            </Text>
            <UnorderedList>
              <ListItem>świadome</ListItem>
              <ListItem>współczujące</ListItem>
              <ListItem>odpowiedzialne</ListItem>
              <ListItem>odważne</ListItem>
              <ListItem>zuchwałe</ListItem>
            </UnorderedList>
            <Text>
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
              <ReactLink to={`marynarki`}>MARYNARKI</ReactLink>
              <Link>KOSZULE</Link>
              <ReactLink to={'sukienki'}>SUKIENKI</ReactLink>
              <Link>O NAS</Link>
              <Button size="lg">KONTAKT</Button>
            </Flex>
          </Flex>
        </VStack>
        <HStack
          width="100%"
          overflow="hidden"
          maxH={{ base: '300px', md: 'none'}}
        >
          <BackgroundImages images={bgImages2} />
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
