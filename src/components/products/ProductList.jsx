import React from 'react'
import ProductItem from './components/ProductItem'
import './style.css'


const ProductList = ({ listOfProducts, name, city }) => {

    const flag = false

    function getTextBlock(flagVal)
    {
        return flagVal ? (<h3 className='title'>{name} is belongs to {city}</h3>) : (<h3>Flag val is false</h3>)
    }


    return (
        <>
            {getTextBlock(flag)}
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