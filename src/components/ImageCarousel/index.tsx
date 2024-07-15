import React from "react";
import Slider from "react-slick";
import {
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  IconButton,
  Box,
} from "@chakra-ui/react";
import img1 from "../../imgs/home-img/bee-min.png";
import img2 from "../../imgs/home-img/freedom-min.png";
import img3 from "../../imgs/home-img/love-min.png";
import img4 from "../../imgs/home-img/moonlight-min.png";
import img5 from "../../imgs/home-img/morewildlife-min.png";
import img6 from "../../imgs/home-img/shine-min.png";
import img7 from "../../imgs/home-img/trees-min.png";
import img8 from "../../imgs/home-img/water-min.png";

import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

interface ImageData {
  src: string;
  alt: string;
  description: string;
}

const bee = 'Pszczoły pełnią kluczową rolę w całym systemie ekologicznym. Zapylają około 80% roślin. Bez pszczół, rozwój i wzrost roślin nie jest możliwy. Trudne warunki w środowisku naturalnym, są dla nich dużym zagrożeniem i przyczyniają się do ich wymierania. Gdyby zabrakło pszczoły miodnej, nie było by, większości owoców i warzyw. Istnieje przekonanie, że od owadów zapylających zależy gospodarka żywnościowa, a więc i sytuacja społeczna i ekonomiczna na świecie.'

const images: ImageData[] = [
  {
    src: img1,
    alt: "bee",
    description: bee,
  },
  {
    src: img2,
    alt: "Image 2",
    description: "Description for Image 2",
  },
  {
    src: img3,
    alt: "Image 3",
    description: "Description for Image 3",
  },
  {
    src: img4,
    alt: "Image 1",
    description: "Description for Image 1",
  },
  {
    src: img5,
    alt: "Image 2",
    description: "Description for Image 2",
  },
  {
    src: img6,
    alt: "Image 3",
    description: "Description for Image 3",
  },
  {
    src: img7,
    alt: "Image 2",
    description: "Description for Image 2",
  },
  {
    src: img8,
    alt: "Image 3",
    description: "Description for Image 3",
  },
];

const Carousel: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState<ImageData | null>(
    null
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <IconButton
        sx={{ fontSize: 40 }}
        aria-label="next-img"
        icon={<ArrowForwardIcon />}
        onClick={onClick}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
        background="transparent"
        _hover={{ background: "transparent" }}
      />
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <IconButton
        sx={{ fontSize: 40 }}
        aria-label="prev-img"
        icon={<ArrowBackIcon />}
        onClick={onClick}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
        background="transparent"
        _hover={{ background: "transparent" }}
      />
    );
  };

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
      }
    ],
  };

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      <Flex width="100%" mt={10} flexDir="column" alignItems="center">
        <Box width="full">
          <Slider {...settings}>
            {images.map((image) => (
              <Flex
                px={1}
                key={image.src}
                onClick={() => handleImageClick(image)}
                cursor="pointer"
                alignItems='center'
                overflow='hidden'
                justifyContent='center'
                w='auto'
                h='auto'
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  w='auto'
                  h='auto'
                  maxH='80vh'
                  maxW="100%"
                  objectFit="contain"
                />
              </Flex>
            ))}
          </Slider>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          width="100vw"
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          maxW="none"
        >
          <ModalHeader>{selectedImage?.alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={0}
          >
            <Image
              src={selectedImage?.src}
              alt={selectedImage?.alt}
              borderRadius={4}
              maxH="70vh"
              objectFit="contain"
            />
            <Text py={4} px={{ base: 2, md: 8, lg: 16}} textAlign='center' maxW='1440px'>
              {selectedImage?.description}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Carousel;
