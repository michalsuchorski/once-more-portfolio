import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

export const Loader: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
    >
      <Spinner size="xl" />
    </Flex>
  );
};

