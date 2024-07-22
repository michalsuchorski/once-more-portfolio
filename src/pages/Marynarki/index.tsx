import { VStack } from "@chakra-ui/react";
import { ClothesGallery } from "../../components/ClothesGallery";
import { ResponsiveMenu } from "../../components/Menu";

import img1 from "../../pages/Marynarki/imgs/AC6336D8-F8E1-4FF3-B5E0-2A0A3454251E-min.png";
import img2 from "../../pages/Marynarki/imgs/img2-min.png";
import img3 from "../../pages/Marynarki/imgs/img3-min.png";
import img4 from "../../pages/Marynarki/imgs/img4.jpg";

import m1 from "../../pages/Marynarki/imgs/m1-min.png";
import m2 from "../../pages/Marynarki/imgs/m2-min.png";
import m3 from "../../pages/Marynarki/imgs/m3-min.png";
import m4 from "../../pages/Marynarki/imgs/m4-min.png";

import marynarka1_1 from "../../pages/Marynarki/imgs/marynarka1_1.jpeg";
import marynarka1_2 from "../../pages/Marynarki/imgs/marynarka1_2.jpeg";
import marynarka1_3 from "../../pages/Marynarki/imgs/marynarka1_3.jpeg";
import marynarka1_4 from "../../pages/Marynarki/imgs/marynarka1_4.jpeg";

import marynarka2_1 from "../../pages/Marynarki/imgs/marynarka2_1-min.png";
import marynarka2_2 from "../../pages/Marynarki/imgs/marynarka2_2-min.png";
import marynarka2_3 from "../../pages/Marynarki/imgs/marynarka2_3-min.png";
import marynarka2_4 from "../../pages/Marynarki/imgs/marynarka2_4-min.png";

import marynarka3_1 from "../../pages/Marynarki/imgs/marynarka3_1-min.png";
import marynarka3_2 from "../../pages/Marynarki/imgs/marynarka3_2-min.png";
import marynarka3_3 from "../../pages/Marynarki/imgs/marynarka3_3-min.png";
import marynarka3_4 from "../../pages/Marynarki/imgs/marynarka3_4-min.png";

import marynarka4_1 from "../../pages/Marynarki/imgs/marynarka4_1.jpeg";
import marynarka4_2 from "../../pages/Marynarki/imgs/marynarka4_2.jpeg";
import marynarka4_3 from "../../pages/Marynarki/imgs/marynarka4_3.jpeg";
import marynarka4_4 from "../../pages/Marynarki/imgs/marynarka4_4.jpeg";

import marynarka5_1 from "../../pages/Marynarki/imgs/marynarka5_1.jpg";
import marynarka5_2 from "../../pages/Marynarki/imgs/marynarka5_2.jpg";
import marynarka5_3 from "../../pages/Marynarki/imgs/marynarka5_3.jpg";
import marynarka5_4 from "../../pages/Marynarki/imgs/marynarka5_4.jpg";

import marynarka6_1 from "../../pages/Marynarki/imgs/marynarka6_1.jpg";
import marynarka6_2 from "../../pages/Marynarki/imgs/marynarka6_2.jpg";
import marynarka6_3 from "../../pages/Marynarki/imgs/marynarka6_3.jpg";
import marynarka6_4 from "../../pages/Marynarki/imgs/marynarka6_4.jpg";

import marynarka7_1 from "../../pages/Marynarki/imgs/marynarka7_1.jpg";
import marynarka7_2 from "../../pages/Marynarki/imgs/marynarka7_2.jpg";
import marynarka7_3 from "../../pages/Marynarki/imgs/marynarka7_3.jpg";
import marynarka7_4 from "../../pages/Marynarki/imgs/marynarka7_4.jpg";

import marynarka8_1 from "../../pages/Marynarki/imgs/marynarka8_1.jpg";
import marynarka8_2 from "../../pages/Marynarki/imgs/marynarka8_2.jpg";
import marynarka8_3 from "../../pages/Marynarki/imgs/marynarka8_3.jpg";
import marynarka8_4 from "../../pages/Marynarki/imgs/marynarka8_4.jpg";

import marynarka9_1 from "../../pages/Marynarki/imgs/marynarka9_1.jpg";
import marynarka9_2 from "../../pages/Marynarki/imgs/marynarka9_2.jpg";
import marynarka9_3 from "../../pages/Marynarki/imgs/marynarka9_3.jpg";
import marynarka9_4 from "../../pages/Marynarki/imgs/marynarka9_4.jpg";

import marynarka10_1 from "../../pages/Marynarki/imgs/marynarka10_1.jpg";
import marynarka10_2 from "../../pages/Marynarki/imgs/marynarka10_2.jpg";
import marynarka10_3 from "../../pages/Marynarki/imgs/marynarka10_3.jpg";
import marynarka10_4 from "../../pages/Marynarki/imgs/marynarka10_4.jpg";

import marynarka11_1 from "../../pages/Marynarki/imgs/marynarka11_1.jpg";
import marynarka11_2 from "../../pages/Marynarki/imgs/marynarka11_2.jpg";
import marynarka11_3 from "../../pages/Marynarki/imgs/marynarka11_3.jpg";
// import marynarka11_4 from "../../pages/Marynarki/imgs/marynarka11_4.jpg";

import marynarka12_1 from "../../pages/Marynarki/imgs/marynarka12_1.jpg";
import marynarka12_2 from "../../pages/Marynarki/imgs/marynarka12_2.jpg";
import marynarka12_3 from "../../pages/Marynarki/imgs/marynarka12_3.jpg";
import marynarka12_4 from "../../pages/Marynarki/imgs/marynarka12_4.jpg";

const images = [
  {
    src: marynarka1_1,
    alt: "marynakra1",
    subImgs: [marynarka1_2, marynarka1_3, marynarka1_4],
  },
  {
    src: marynarka11_1,
    alt: "img12",
    subImgs: [marynarka11_2, marynarka11_3],
  },
  {
    src: marynarka12_1,
    alt: "img13",
    subImgs: [marynarka12_2, marynarka12_3, marynarka12_4],
  },
  {
    src: marynarka4_4,
    alt: "img5",
    subImgs: [marynarka4_1, marynarka4_3, marynarka4_2],
  },
  {
    src: m3,
    alt: "img2",
    subImgs: [m2, m1, m4],
  },
  {
    src: img2,
    alt: "img1",
    subImgs: [img1, img3, img4],
  },
  {
    src: marynarka3_4,
    alt: "img4",
    subImgs: [marynarka3_2, marynarka3_3, marynarka3_1],
  },
  {
    src: marynarka5_1,
    alt: "img6",
    subImgs: [marynarka5_2, marynarka5_3, marynarka5_4],
  },
  {
    src: marynarka6_1,
    alt: "img7",
    subImgs: [marynarka6_2, marynarka6_3, marynarka6_4],
  },
  {
    src: marynarka10_1,
    alt: "img11",
    subImgs: [marynarka10_2, marynarka10_3, marynarka10_4],
  },
  {
    src: marynarka8_1,
    alt: "img9",
    subImgs: [marynarka8_2, marynarka8_3, marynarka8_4],
  },
  {
    src: marynarka9_1,
    alt: "img10",
    subImgs: [marynarka9_2, marynarka9_3, marynarka9_4],
  },
  {
    src: marynarka2_2,
    alt: "img3",
    subImgs: [marynarka2_3, marynarka2_1, marynarka2_4],
  },
  {
    src: marynarka7_1,
    alt: "img8",
    subImgs: [marynarka7_2, marynarka7_3, marynarka7_4],
  },
];

export const Marynarki = () => {
  return (
    <>
      <VStack w="100%" justifyContent="center">
        <ResponsiveMenu />
        <ClothesGallery images={images} />
      </VStack>
    </>
  );
};
