import {
  Box,
  Image as ChakraImage,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import img1 from "../../imgs/home-img/bee-min.png";
import img2 from "../../imgs/home-img/freedom-min.png";
import img3 from "../../imgs/home-img/love-min.png";
import img4 from "../../imgs/home-img/moonlight-min.png";
import img5 from "../../imgs/home-img/morewildlife-min.png";
import img6 from "../../imgs/home-img/shine-min.png";
import img7 from "../../imgs/home-img/trees-min.png";
import img8 from "../../imgs/home-img/water-min.png";
import { NextArrow, PrevArrow } from "../CarouselArrows";
import { Loader } from "../Loader";

interface ImageData {
  src: string;
  alt: string;
  description: string;
}

const bee = "Pszczoły pełnią kluczową rolę w całym systemie ekologicznym. Zapylają około 80% roślin. Bez pszczół, rozwój i wzrost roślin nie jest możliwy. Trudne warunki w środowisku naturalnym, są dla nich dużym zagrożeniem i przyczyniają się do ich wymierania. Gdyby zabrakło pszczoły miodnej, nie było by, większości owoców i warzyw. Istnieje przekonanie, że od owadów zapylających zależy gospodarka żywnościowa, a więc i sytuacja społeczna i ekonomiczna na świecie.";

const images: ImageData[] = [
  { src: img1, alt: "bee", description: bee },
  { src: img2, alt: "more freedom", description: "Description for Image 2" },
  { src: img3, alt: "more love", description: "Description for Image 3" },
  { src: img4, alt: "moonlight", description: "Description for Image 1" },
  { src: img5, alt: "more wildlife", description: "Description for Image 2" },
  { src: img6, alt: "shine", description: "Description for Image 3" },
  { src: img7, alt: "more trees", description: "Description for Image 2" },
  { src: img8, alt: "more water", description: "Description for Image 3" },
];

const Carousel: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 708,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  useEffect(() => {
    const imagePromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
    });
  }, []);

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      {isLoading ? (
          <Loader />
      ) : (
        <Flex width="100%" mt={10} flexDir="column" alignItems="center">
          <Box width="full">
            <Slider {...settings}>
              {images.map((image) => (
                <Flex
                  px={1}
                  key={image.src}
                  onClick={() => handleImageClick(image)}
                  cursor="pointer"
                  alignItems="center"
                  overflow="hidden"
                  justifyContent="center"
                  w="auto"
                  h="auto"
                >
                  <ChakraImage
                    src={image.src}
                    alt={image.alt}
                    w="auto"
                    h="auto"
                    maxH="80vh"
                    maxW="100%"
                    objectFit="contain"
                  />
                </Flex>
              ))}
            </Slider>
          </Box>
        </Flex>
      )}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          overflow={{ base: "visible", md: "hidden" }}
        >
          <ModalHeader>{selectedImage?.alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            mt={-4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={0}
          >
            <Text
              py={8}
              px={{ base: 4, md: 8, lg: 16 }}
              textAlign="justify"
              sx={{ "text-align-last": "justify" }}
              maxW="1440px"
            >
              {selectedImage?.description}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Carousel;
