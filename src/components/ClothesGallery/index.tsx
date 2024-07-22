import { Grid, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GalleryItem } from "../GalleryItem";
import { Loader } from "../Loader";
import { ImageData } from "../GalleryItem/types";

interface ClothesGalleryProps {
  images: ImageData[];
}

export const ClothesGallery: React.FC<ClothesGalleryProps> = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = images.flatMap(image =>
      [image.src, ...image.subImgs].map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      })
    );

    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
    });
  }, [images]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <VStack w="100%" px={{ base: 2, md: 6, lg: 8 }}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} py={8}
            w="full"
            gap={{ base: 2, md: 4, lg: 8 }}
          >
              <GalleryItem images={images} />
          </Grid>
        </VStack>
      )}
    </>
  );
};
