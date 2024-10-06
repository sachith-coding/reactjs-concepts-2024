import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const ContextText = () => {

    const {theme} = useContext(GlobalContext)

    return (
        <h2 style={{color : theme === 'light' ? 'orange' : 'blue' }}>Sachith Priyashantha</h2>
    )
}

export default ContextText