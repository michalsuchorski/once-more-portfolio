import {
    Box,
    GridItem,
    Image as ChakraImage,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";
  import { NextArrow, PrevArrow } from "../CarouselArrows";
  import Slider from "react-slick";
  import { ImageData } from "./types";
  import { Loader } from "../Loader";
  
  interface GalleryItemProps {
    images: ImageData[];
  }
  
  export const GalleryItem: React.FC<GalleryItemProps> = ({ images }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
    const [loading, setLoading] = useState(true);
    const [, setImageLoadingStatus] = useState<{ [key: string]: boolean }>({});
  
    useEffect(() => {
      if (selectedImage) {
        const loadImages = async () => {
          const imagePromises = selectedImage.subImgs.map(
            (subImage) =>
              new Promise<void>((resolve) => {
                const img = new Image();
                img.src = subImage;
                img.onload = () => resolve();
              })
          );
          await Promise.all(imagePromises);
          setLoading(false);
        };
  
        setLoading(true); // Resetuje stan ładowania przy każdym otwarciu modalu
        loadImages();
      }
    }, [selectedImage]);
  
    useEffect(() => {
      if (isOpen) {
        const initialStatus = images.reduce((acc, image) => {
          acc[image.src] = true;
          return acc;
        }, {} as { [key: string]: boolean });
  
        setImageLoadingStatus(initialStatus);
      }
    }, [isOpen, images]);
  
    const handleImageLoad = (src: string) => {
      setImageLoadingStatus((prevState) => ({
        ...prevState,
        [src]: false,
      }));
    };
  
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: false,
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
        {images.map((image) => (
          <GridItem
            _hover={{
              transform: "scale(1.01)",
            }}
            transition="all 0.15s ease-in"
            w="100%"
            cursor="pointer"
            key={image.src}
            p={3}
            onClick={() => {
              setSelectedImage(image);
              onOpen();
            }}
          >
            <ChakraImage
              src={image.src}
              w="100%"
              h="100%"
              objectFit="cover"
              onLoad={() => handleImageLoad(image.src)}
            />
          </GridItem>
        ))}
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent
            height={{ base: "90vh", md: "90vh", lg: "100vh" }}
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
              {loading ? (
                <Loader /> 
              ) : (
                <Box w="full">
                  <Slider {...settings}>
                    {selectedImage?.subImgs.map((subImage, index) => (
                      <ChakraImage
                        key={index}
                        borderRadius="md"
                        p={{ base: 2, md: 2, lg: 1 }}
                        src={subImage}
                        w="auto"
                        h="auto"
                        maxH="80vh"
                        maxW="100%"
                        objectFit="cover"
                      />
                    ))}
                  </Slider>
                </Box>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  