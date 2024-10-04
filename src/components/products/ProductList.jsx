import React, { useEffect, useState } from 'react'
import ProductItem from './components/ProductItem'
import './style.css'


const ProductList = ({ listOfProducts, name, city }) => {

    const [flag, setFlag] = useState(true)
    const [count, setCount] = useState(0)
    const [countChecker, setCountChecker] = useState(false)

    useEffect(() => {
        setFlag(!flag)
        console.log("Intial Page Loading");

        return () => {
            console.log('Component getting Destroyed -> we can do some more side effects here also');
        }

    }, []) // Only call once when page loading.....

    useEffect(() => {
        if(count === 10)
        {
            setCountChecker(true)
        }
    }, [count]) // call only when count changes......


    const handleToggleText = () => {
        setFlag(!flag)
    }

    const handleCount = () => {
        setCount(count+1)
    }

    return (
        <>
            <button className='buttonStyle' onClick={handleToggleText}>Toggle Text</button>
            {
                flag ? (<h3 className='title'>{name} is belongs to {city}</h3>) : (<h3>Flag val is false</h3>)
            }
            <div>
                <button className='buttonStyle' onClick={handleCount}>Increase Count</button>
                <h3>Count : {count}</h3>
                <p>{!countChecker ? "Count is below 10" : "Count is equal or above 10"}</p>
            </div>
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