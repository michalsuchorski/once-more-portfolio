import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import logo from "../../imgs/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack w="100%" justifyContent="center" h="100vh">
        <HStack
          justifyContent="space-between"
          w="100%"
          maxW="1440px"
          px={{ base: 4, md: 4, lg: 8}}
          py={4}
        >
          <Image src={logo} w={{ base: '100px', md: '150px'}} />
          <HStack gap={6} fontSize="x-large" display={{ base: 'none', md: 'flex'}}>
            <Link color="green.500">HOME</Link>
            <Link>MARYNARKI</Link>
            <Link>KOSZULE</Link>
            <Link>SUKIENKI</Link>
            <Link>O NAS</Link>
          </HStack>
          <IconButton colorScheme="black" variant="outline" aria-label="open menu" icon={<RxHamburgerMenu />} onClick={onOpen} display={{ base: 'flex', md: 'none'}} />
        </HStack>
        <VStack w="100%" mt="-20px" h="100%">
          <Text fontSize="x-large">Once More</Text>
          <Text fontSize="small" py={2}>
            {" "}
            &copy; 2024 Once More
          </Text>
        </VStack>
      </VStack>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size='xs'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack gap={6} fontSize="x-large" py={10}>
              <Link color="green.500">HOME</Link>
              <Link>MARYNARKI</Link>
              <Link>KOSZULE</Link>
              <Link>SUKIENKI</Link>
              <Link>O NAS</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Home;
