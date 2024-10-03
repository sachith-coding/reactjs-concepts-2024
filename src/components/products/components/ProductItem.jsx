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
        <>
            {console.log(styles)}
            <p>{singleProduct}</p>
            <ButtonComponent />
            <hr />
        </>
    )
}

export default ProductItem