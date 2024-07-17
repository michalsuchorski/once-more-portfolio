import {
  Grid,
  VStack,
} from "@chakra-ui/react";
import img1 from "../../pages/Marynarki/imgs/AC6336D8-F8E1-4FF3-B5E0-2A0A3454251E.png";
import img2 from "../../pages/Marynarki/imgs/img2.png";
import img3 from "../../pages/Marynarki/imgs/img3.png";
import img4 from "../../pages/Marynarki/imgs/img4.png";

import m1 from '../../pages/Marynarki/imgs/m1.png'
import m2 from '../../pages/Marynarki/imgs/m2.png'
import m3 from '../../pages/Marynarki/imgs/m3.png'
import m4 from '../../pages/Marynarki/imgs/m4.png'


import React from "react";
import { GalleryItem } from "../GalleryItem";
import { ImageData } from "../GalleryItem/types";

export const ClothesGallery: React.FC = () => {



  const images: ImageData[] = [
    {
      src: img1,
      alt: "img1",
      subImgs: [img2, img3, img4],
    },
    {
        src: m1,
        alt: 'img2',
        subImgs: [m2, m3, m4]
    }
  ];

  return (
    <>
      <VStack w="100%" px={{ base: 2, md: 6, lg: 8 }}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          w="full"
          gap={{ base: 2, md: 4, lg: 8 }}
        >
          <GalleryItem images={images} />
        </Grid>
      </VStack>
    </>
  );
};
