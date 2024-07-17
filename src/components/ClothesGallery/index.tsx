import {
  Grid,
  VStack,
} from "@chakra-ui/react";
import img1 from "../../pages/Marynarki/imgs/AC6336D8-F8E1-4FF3-B5E0-2A0A3454251E-min.png";
import img2 from "../../pages/Marynarki/imgs/img2-min.png";
import img3 from "../../pages/Marynarki/imgs/img3-min.png";
import img4 from "../../pages/Marynarki/imgs/img4-min.png";

import m1 from '../../pages/Marynarki/imgs/m1-min.png'
import m2 from '../../pages/Marynarki/imgs/m2-min.png'
import m3 from '../../pages/Marynarki/imgs/m3-min.png'
import m4 from '../../pages/Marynarki/imgs/m4-min.png'

import marynarka2_1 from '../../pages/Marynarki/imgs/marynarka2_1-min.png'
import marynarka2_2 from '../../pages/Marynarki/imgs/marynarka2_2-min.png'
import marynarka2_3 from '../../pages/Marynarki/imgs/marynarka2_3-min.png'
import marynarka2_4 from '../../pages/Marynarki/imgs/marynarka2_4-min.png'

import marynarka3_1 from '../../pages/Marynarki/imgs/marynarka3_1-min.png'
import marynarka3_2 from '../../pages/Marynarki/imgs/marynarka3_2-min.png'
import marynarka3_3 from '../../pages/Marynarki/imgs/marynarka3_3-min.png'
import marynarka3_4 from '../../pages/Marynarki/imgs/marynarka3_4-min.png'



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
    },
    {
        src: marynarka2_3,
        alt: 'img3',
        subImgs: [marynarka2_2, marynarka2_1, marynarka2_4]
    },
    {
        src: marynarka3_1,
        alt: 'img4',
        subImgs: [marynarka3_2, marynarka3_3, marynarka3_4]
    }

  ];

  return (
    <>
      <VStack w="100%" px={{ base: 2, md: 6, lg: 8 }}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} py={8}
          w="full"
          gap={{ base: 2, md: 4, lg: 8 }}
        >
          <GalleryItem images={images} />
        </Grid>
      </VStack>
    </>
  );
};
