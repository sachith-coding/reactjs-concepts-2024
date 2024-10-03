import React from 'react'
import ProductItem from './components/ProductItem'
import './style.css'

const ProductList = ({ listOfProducts, name, city }) => {
    return (
        <>
            <h3 className='title'>{name} is belongs to {city}</h3>
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