import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const ContextButton = () => {

    const { theme, handleThemechange } = useContext(GlobalContext)

    return (
        <button onClick={handleThemechange}>Change Theme</button>
    )
}

export default ContextButton