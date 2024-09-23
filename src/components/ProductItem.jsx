import React from 'react'

const ButtonComponent = () => {
    return (
        <>
            <button>Click Here</button>
        </>
    )
}

const ProductItem = () => {
    return (
        <>
            <div>ProductItem</div>
            <ButtonComponent />
        </>
    )
}

export default ProductItem