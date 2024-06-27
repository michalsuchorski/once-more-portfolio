import { SystemStyleObject } from "@chakra-ui/theme-tools";

const variantPrimary: SystemStyleObject = {
    fontWeight: '400',
    fontSize: 'large',
    lineHeight: '0px',
    backgroundColor: 'red.500',
    color: 'white',
    _hover: {
        backgroundColor: 'red.400'
    }
}

const variants = {
    primary: variantPrimary
}

const defaultProps = {
    variant: 'primary',
    size: 'md',
}

export const buttonComponent = {
    variants, 
    defaultProps
}