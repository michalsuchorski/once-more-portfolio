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
import img1 from "../../components/BackgroundImages/p6.jpg";
import img4 from "../../components/BackgroundImages/p1.jpeg";
import img5 from "../../components/BackgroundImages/p3.jpg";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

interface ImageData {
  src: string;
  alt: string;
  description: string;
}

const images: ImageData[] = [
  {
    src: img1,
    alt: "Image 1",
    description: "Description for Image 1",
  },
  {
    src: img4,
    alt: "Image 2",
    description: "Description for Image 2",
  },
  {
    src: img5,
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1054,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1036,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
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
              >
                <Image src={image.src} alt={image.alt} maxW="100%" />
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
          maxW='none'
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
              maxW="90%"
              maxH="90vh"
              objectFit="contain"
            />
            <Text mt={2} py={4}>
              {selectedImage?.description}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Carousel;
