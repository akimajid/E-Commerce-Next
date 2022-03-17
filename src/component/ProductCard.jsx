import { AspectRatio, Box, Button, Image, Stack, Text, Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"

const ProductCard = ({ imageUrl, productName, price, id }) => {
    return (
        <Stack width="2xs" spacing={4}>
            <AspectRatio ratio={4 / 3}>
            <Image
            borderRadius={8}  
            src={imageUrl} />
            </AspectRatio>
           
            <Box fontWeight="medium">
                <Text>{productName}</Text>
                <Text mt="1">Rp.{price?.toLocaleString()}</Text>
            </Box>
            
            <Stack alignItems="center">
            <Button width="100%" colorScheme="blue">Add to cart</Button>
            <NextLink href={`/products/${id}`} passHref>
                <ChakraLink textDecoration="underline">View Details</ChakraLink>
            </NextLink>
            </Stack>
        </Stack>
        
    )
}

export default ProductCard