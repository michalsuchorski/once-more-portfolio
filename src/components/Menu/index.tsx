import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Link,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as ReactLink } from "react-router-dom";
import logo from "../../imgs/logo.png";

export const ResponsiveMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        justifyContent="space-between"
        w="100%"
        maxW="1440px"
        px={{ base: 4, md: 4, lg: 10 }}
        py={4}
      >
        <ReactLink to={"/"}>
          <Image src={logo} w={{ base: "100px", md: "150px" }} />
        </ReactLink>

        <HStack
          gap={6}
          fontSize="x-large"
          display={{ base: "none", md: "flex" }}
        >
          <ReactLink to={"/home"}>HOME</ReactLink>
          <ReactLink to={"/marynarki"}>MARYNARKI</ReactLink>
          <Link>KOSZULE</Link>
          <Link>SUKIENKI</Link>
          <Link>O NAS</Link>
        </HStack>
        <IconButton
          colorScheme="black"
          variant="outline"
          aria-label="open menu"
          icon={<RxHamburgerMenu />}
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack gap={6} fontSize="x-large" py={10}>
                <ReactLink to={"/home"}>HOME</ReactLink>
                <ReactLink to={"/marynarki"}>MARYNARKI</ReactLink>
                <Link>KOSZULE</Link>
                <Link>SUKIENKI</Link>
                <Link>O NAS</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};
