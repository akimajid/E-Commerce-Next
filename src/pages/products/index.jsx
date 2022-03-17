import { Box, Center, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProductCard from "../../component/ProductCard"
import axiosInstance from "../../lib/api"

const ProductPage = () => {
    const [productList, setProductList] = useState([])

    const fecthProductList = async () => {
        try {
            const res = await axiosInstance.get("/products")
            
            setProductList(res.data)
        } catch (err) {
            console.log(err.message)
        }
    }

    const renderProduct = () => {
        return productList.map((product) => {
            return (
                <Box margin={4}>
                    <ProductCard
                        id={product.id}
                        imageUrl= {product.image_url}
                        price={product.price}
                        productname= {product.product_name}
                        key={product?.id?.toString()}
                    />
                </Box>
            )
        })
    }
    

    useEffect(() =>{
        fecthProductList()
    }, [])


    return (
        <Center>
        <Box paddingTop={10} width="4xl">
            <Flex wrap="wrap">{renderProduct()}</Flex>
        </Box>
        </Center>
    )
}

export default ProductPage