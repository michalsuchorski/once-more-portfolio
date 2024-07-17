import {
  Box,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { NextArrow, PrevArrow } from "../CarouselArrows";
import Slider from "react-slick";
import { ImageData } from "./types";

interface GalleryItemProps {
  images: ImageData[];
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ images }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState<ImageData | null>(
    null
  );

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
    onOpen();
  };

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 644,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <>
      {images.map((image) => {
        return (
          <GridItem
            w="100%"
            cursor="pointer"
            key={image.src}
            onClick={() => handleImageClick(image)}
          >
            <Image src={image.src} />
          </GridItem>
        );
      })}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          height={{ base: "85vh", md: "85vh", lg: "100vh" }}
          w="100vw"
          maxW="none"
        >
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={0}
          >
            <Box w="full">
              <Slider {...settings}>
                {selectedImage?.subImgs.map((subImage) => (
                  <Image
                    borderRadius="md"
                    p={{ base: 2, md: 2, lg: 1 }}
                    src={subImage}
                    w="auto"
                    h="auto"
                    maxH="100vh"
                    maxW="100%"
                  />
                ))}
              </Slider>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
