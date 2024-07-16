import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      sx={{ fontSize: 40 }}
      aria-label="next-img"
      icon={<ArrowForwardIcon />}
      onClick={onClick}
      position="absolute"
      right="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={1}
      background="transparent"
      _hover={{ background: "transparent" }}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <IconButton
        sx={{ fontSize: 40 }}
        aria-label="prev-img"
        icon={<ArrowBackIcon />}
        onClick={onClick}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
        background="transparent"
        _hover={{ background: "transparent" }}
      />
    );
  };