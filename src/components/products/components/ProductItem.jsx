import React from 'react'
import styles from './ProductItem.module.css'

const ButtonComponent = () => {
    return (
        <>
            <button className={styles.buttonStyle}>Click Here</button>
        </>
    )
}

const ProductItem = ({singleProduct}) => {
    return (
        <div style={{padding: '20px', border: '2px solid grey', marginBottom: '10px'}}>
            <p className={styles.productTitle}>{singleProduct}</p>
            <ButtonComponent />
        </div>
    )
}

export default ProductItem