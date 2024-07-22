import { VStack } from "@chakra-ui/react"
import { ResponsiveMenu } from "../../components/Menu"
import { ClothesGallery } from "../../components/ClothesGallery"

import sukienka1_1 from './imgs/sukienka1_1.jpg'
import sukienka1_2 from './imgs/sukienka1_2.jpg'
import sukienka1_3 from './imgs/sukienka1_3.jpg'
import sukienka1_4 from './imgs/sukienka1_4.jpg'

import sukienka2_1 from './imgs/sukienka2_1.jpg'
import sukienka2_2 from './imgs/sukienka2_2.jpg'
import sukienka2_3 from './imgs/sukienka2_3.jpg'
import sukienka2_4 from './imgs/sukienka2_4.jpg'

import sukienka3_1 from './imgs/sukienka3_1.jpg'
import sukienka3_2 from './imgs/sukienka3_2.jpg'
import sukienka3_3 from './imgs/sukienka3_3.jpg'
import sukienka3_4 from './imgs/sukienka3_4.jpg'

import sukienka4_1 from './imgs/sukienka4_1.jpg'
import sukienka4_2 from './imgs/sukienka4_2.jpg'
import sukienka4_3 from './imgs/sukienka4_3.jpg'
import sukienka4_4 from './imgs/sukienka4_4.jpg'

import sukienka5_1 from './imgs/sukienka5_1.jpg'
import sukienka5_2 from './imgs/sukienka5_2.jpg'
import sukienka5_3 from './imgs/sukienka5_3.jpg'
import sukienka5_4 from './imgs/sukienka5_4.jpg'

import sukienka6_1 from './imgs/sukienka6_1.jpg'
import sukienka6_2 from './imgs/sukienka6_2.jpg'
import sukienka6_3 from './imgs/sukienka6_3.jpg'
import sukienka6_4 from './imgs/sukienka6_4.jpg'


const images = [
    {
        src: sukienka1_1,
        alt: 'sukienka 1',
        subImgs: [sukienka1_2, sukienka1_3, sukienka1_4]
    },
    {
        src: sukienka2_1,
        alt: 'sukienka 2',
        subImgs: [sukienka2_2, sukienka2_3, sukienka2_4]
    },
    {
        src: sukienka3_1,
        alt: 'sukienka 3',
        subImgs: [sukienka3_2, sukienka3_3, sukienka3_4]
    },
    {
        src: sukienka4_1,
        alt: 'sukienka 4',
        subImgs: [sukienka4_2, sukienka4_3, sukienka4_4]
    },
    {
        src: sukienka5_1,
        alt: 'sukienka 5',
        subImgs: [sukienka5_2, sukienka5_3, sukienka5_4]
    },
    {
        src: sukienka6_1,
        alt: 'sukienka 6',
        subImgs: [sukienka6_2, sukienka6_3, sukienka6_4]
    },

]

export const Sukienki = () => {
    return (
        <>
        <VStack w="100%" justifyContent="center">
          <ResponsiveMenu />
          <ClothesGallery images={images} />
        </VStack>
      </>
    )
}