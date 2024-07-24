import React, { useState, useEffect } from "react";
import { Box, Image, SimpleGrid, keyframes } from "@chakra-ui/react";

interface BackgroundImagesProps {
  images: string[];
}

const shuffleImages = (images: string[]): string[] => {
  const array = [...images];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const BackgroundImages: React.FC<BackgroundImagesProps> = ({
  images,
}) => {
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    setShuffledImages(shuffleImages(images));
  }, [images]);

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
      columns={{ base: 4, sm: 4, md: 4, lg: 4, xl: 8 }}
      overflow="hidden"
      width="100%"
    >
      {shuffledImages.map((src, index) => (
        <Box
          key={index}
          w="100%"
          h={{ base: "25vw", sm: "20vw", md: "15vw", lg: "8vw", xl: "8vw" }}
          bg="gray.200"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <Image
            src={src}
            alt={`image-${index}`}
            onLoad={() => handleLoad(index)}
            display={loaded[index] ? "block" : "none"}
            animation={`${fadeIn} 0.5s ease-in-out`}
            objectFit="cover"
            w="100%"
            h="100%"
          />
          {!loaded[index] && (
            <Box
              w="100%"
              h={{ base: "25vw", sm: "20vw", md: "15vw", lg: "8vw", xl: "8vw" }}
              bg="gray.200"
            />
          )}
        </Box>
      ))}
    </SimpleGrid>
  );
};
