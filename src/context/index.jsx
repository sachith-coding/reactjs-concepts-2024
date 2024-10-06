import { createContext, useState } from "react";


// create the Context
export const GlobalContext = createContext(null)




// create the Global State that receive component as a children
function GlobalState({ children }) {
    // state
    const [theme, setTheme] = useState('light')

    function handleThemechange() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <GlobalContext.Provider value={{ theme, handleThemechange }}>{children}</GlobalContext.Provider>
}

export default GlobalState;