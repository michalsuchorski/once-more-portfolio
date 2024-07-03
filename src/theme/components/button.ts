import { SystemStyleObject } from "@chakra-ui/theme-tools";

const variantPrimary: SystemStyleObject = {
    fontWeight: '400',
    fontSize: 'large',
    lineHeight: '0px',
    backgroundColor: 'green.700',
    color: 'white',
    _hover: {
        backgroundColor: 'green.800'
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