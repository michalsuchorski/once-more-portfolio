import {
  Box,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import img1 from "../../pages/Marynarki/imgs/AC6336D8-F8E1-4FF3-B5E0-2A0A3454251E.png";
import img2 from "../../pages/Marynarki/imgs/img2.png";
import img3 from "../../pages/Marynarki/imgs/img3.png";
import img4 from "../../pages/Marynarki/imgs/img4.png";

import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../CarouselArrows";

export const ClothesGallery: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState<ImageData | null>(
    null
  );

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
    onOpen();
  };

  interface ImageData {
    src: string;
    alt: string;
    subImgs: Array<string>;
  }

  const images: ImageData[] = [
    {
      src: img1,
      alt: "img1",
      subImgs: [img2, img3, img4],
    },
  ];

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
        }
    ]
  };

  return (
    <>
      <VStack w="100%" px={{ base: 2, md: 6, lg: 8 }}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          w="full"
          gap={{ base: 2, md: 4, lg: 8 }}
        >
          {images.map((image) => {
            return (
              <GridItem
                w="100%"
                cursor="pointer"
                key={image.src}
                onClick={() => handleImageClick(image)}
              >
                <Image src={image.src} />
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent height={{base: '75vh', md: '80vh', lg: '100vh'}} w="100vw" maxW="none">
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
                          {selectedImage?.subImgs.map((subImage) => {
                            return (
                              <Image
                                borderRadius='md'
                                p={{ base: 2, md: 2, lg: 1}}
                                src={subImage}
                                w="auto"
                                h="auto"
                                maxH="80vh"
                                maxW="100%"
                              />
                            );
                          })}
                        </Slider>
                      </Box>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
    </>
  );
};
