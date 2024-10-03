import React, { useState } from 'react'
import ProductItem from './components/ProductItem'
import './style.css'


const ProductList = ({ listOfProducts, name, city }) => {

    const [flag, setFlag] = useState(true)

    function getTextBlock(flagVal)
    {
        return flagVal ? (<h3 className='title'>{name} is belongs to {city}</h3>) : (<h3>Flag val is false</h3>)
    }

    const handleToggleText = () => {
        setFlag(!flag)
    }

    return (
        <>
            <button onClick={handleToggleText}>Toggle Text</button>
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