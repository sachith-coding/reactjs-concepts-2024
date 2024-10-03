import React from 'react'

const ButtonComponent = () => {
    return (
        <>
            <button>Click Here</button>
        </>
    )
}

const ProductItem = ({singleProduct}) => {
    return (
        <>
            <p>{singleProduct}</p>
            <ButtonComponent />
            <hr />
        </>
    )
}

export default ProductItem