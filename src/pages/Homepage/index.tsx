import {
    Flex,
    Text,
    Button,
    HStack,
    VStack,
    IconButton,
    Link,
    Image,
  } from "@chakra-ui/react";
  import { FaInstagram, FaFacebookF } from "react-icons/fa";
  import OnceMore from "../../imgs/oncemore_napis.png";
  import { Link as ReactLink } from 'react-router-dom'
  
export const Homepage = () => {
    return (
      <Flex backgroundColor="red" w="100%" h="100vh" alignItems="center">
        <VStack backgroundColor="white" p={{ base: 4, md: 10, lg: 16 }}>
          <VStack alignItems="flex-start">
            <Image
              src={OnceMore}
              width={{ base: "400px", md: "500px", lg: "700px" }}
            />
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
            color="red.500"
            fontSize="x-large"
            mt={10}
            fontWeight="500"
            letterSpacing="1.5px"
          >
            <HStack mr={8}>
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
            <Flex
              alignItems={{ base: "flex-start", md: "center", lg: "center" }}
              w="100%"
              gap={8}
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              mt={{ base: 8, md: '0px', lg: '0px'}}
            >
              <ReactLink to={`home`}><Link>HOME</Link></ReactLink>
              <Link>BEE</Link>
              <Link>MORE</Link>
              <Link>DODATKI</Link>
              <Button size="lg">KONTAKT</Button>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    );
  }
  

  