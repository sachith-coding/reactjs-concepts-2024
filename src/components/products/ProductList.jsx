import React from 'react'
import ProductItem from './components/ProductItem'
import './style.css'

const ProductList = ({ listOfProducts }) => {
    return (
        <>
            <h3 className='title'>E Commerce Project</h3>
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