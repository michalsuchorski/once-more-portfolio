import { VStack } from "@chakra-ui/react"
import { ResponsiveMenu } from "../../components/Menu"
import { ClothesGallery } from "../../components/ClothesGallery"

export const Marynarki = () => {
    return (
        <>
        <VStack w='100%' justifyContent='center'>
            <ResponsiveMenu />
            <ClothesGallery />
        </VStack>
        </>
    )
}