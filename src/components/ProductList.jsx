import React from 'react'
import ProductItem from './ProductItem'


const ProductList = ({ listOfProducts }) => {
    return (
        <>
            <h3>E Commerce Project</h3>
            {/* <ProductItem /> */}
            <ul>
                {
                    listOfProducts.map((item, index) => (
                        <ProductItem singleProduct={item} key={index} />
                    ))
                }
            </ul>
        </>
    )
}

export default ProductList