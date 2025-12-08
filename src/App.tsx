import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { ThemeContext } from "./context/ThemeContext"
import './i18n'
import './index.css'
import Nav from './layout/Nav'
import About from "./views/About"
import Home from "./views/Home"
import NotFound from "./views/NotFound"
import ProductDetails from "./views/ProductDetails"
import Products from "./views/Products"
import Search from "./views/Search"

export default function App() {
    const themeContext = useContext(ThemeContext)

    return (
        <div className={(themeContext.theme === 'dark' ? 'bg-gray-800 text-amber-50' : '') + ' min-h-dvh'}>
            <Nav />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/products" Component={Products} />
                <Route path="/products/:id" Component={ProductDetails} />
                <Route path="/search?name" Component={Search} />
                <Route path="/*" Component={NotFound} />
            </Routes>
        </div>
    )
}
