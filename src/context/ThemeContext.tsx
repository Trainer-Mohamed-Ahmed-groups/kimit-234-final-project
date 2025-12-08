import { createContext, useState } from "react";

export const ThemeContext = createContext<{ theme: 'dark' | 'light'; handleTheme: () => void }>({
    theme: 'light',
    handleTheme: () => { },
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<'dark' | 'light'>('light')

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider
