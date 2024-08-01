import { VStack } from "@chakra-ui/react"
import { ResponsiveMenu } from "../../components/Menu"
import { ClothesGallery } from "../../components/ClothesGallery"

import koszula1_1 from './imgs/koszula1_1.jpeg'
import koszula1_2 from './imgs/koszula1_2.jpeg'
import koszula1_3 from './imgs/koszula1_3.jpeg'
import koszula1_4 from './imgs/koszula1_4.jpeg'

import koszula2_1 from './imgs/koszula2_1.jpeg'
import koszula2_2 from './imgs/koszula2_2.jpeg'
import koszula2_3 from './imgs/koszula2_3.jpeg'
import koszula2_4 from './imgs/koszula2_4.jpeg'

import koszula3_1 from './imgs/koszula3_1.jpg'
import koszula3_2 from './imgs/koszula3_2.jpg'
import koszula3_3 from './imgs/koszula3_3.jpg'
import koszula3_4 from './imgs/koszula3_4.jpg'

const images = [
  {
    src: koszula1_1,
    alt: 'koszula 1',
    subImgs: [koszula1_2, koszula1_3, koszula1_4],
  },
  {
    src: koszula2_1,
    alt: 'koszula 2',
    subImgs: [koszula2_2, koszula2_3, koszula2_4],
  },
  {
    src: koszula3_1,
    alt: 'koszula 3',
    subImgs: [koszula3_2, koszula3_3, koszula3_4],
  }
]

export const Koszule = () => {
    return (
        <>
        <VStack w="100%" justifyContent="center">
          <ResponsiveMenu />
          <ClothesGallery images={images} />
        </VStack>
      </>
    )
}