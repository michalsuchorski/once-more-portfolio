import React, { useState, useEffect } from 'react';
import { Box, Image, SimpleGrid, keyframes } from '@chakra-ui/react';

import dog from './dogg.jpeg';
import cat from './cat1.jpeg';
import tiger from './tiger.jpeg';
import p1 from './p1.jpeg'
import p5 from './p5.jpg';
import p6 from './p6.jpeg';
import p7 from './p7.jpeg';
import p8 from './p8.jpeg';
import p9 from './p9.jpeg';
import zuk from './zuk.jpeg'
import bee from './bee.jpeg'
import zebra from './zebra.jpeg'
import leopard from './leopard.jpeg'
import biedronka from './ladybug.jpeg'
import zuczki from './zuczki.png'
import pszczolka from './closeup-of-bee.jpg'

const images = [
  dog, cat, p1 ,tiger, p5, p6, zuczki, pszczolka ,biedronka ,p7, p8, p9, zuk, bee, zebra, leopard
];

const shuffleImages = (images: string[]) => {
  const array = [...images];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const BackgroundImages: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean[]>(new Array(images.length).fill(false));
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    setShuffledImages(shuffleImages(images));
  }, []);

  const handleLoad = (index: number) => {
    setLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `;

  return (
    <SimpleGrid
      columns={{ base: 4, sm: 4, md: 5, lg: 5, xl: 8 }}
      overflow='hidden'
      width="100%"
    >
      {shuffledImages.map((src, index) => (
        <Box
          key={index}
          w="100%"
          h={{ base: '100px', sm: '125px', md: '150px', lg: '150px', xl: '150px' }}
          bg="gray.200"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={src}
            alt={`image-${index}`}
            onLoad={() => handleLoad(index)}
            display={loaded[index] ? 'block' : 'none'}
            animation={`${fadeIn} 0.5s ease-in-out`}
            objectFit="cover"
            w="100%"
            h="100%"
          />
          {!loaded[index] && (
            <Box w="100%" h="100%" bg="gray.200" />
          )}
        </Box>
      ))}
    </SimpleGrid>
  );
};
