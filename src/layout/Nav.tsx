import { Button, Input } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
const { Search } = Input;

export default function Nav() {
    const [queryParams, setQueryParams] = useState('')
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const themeContext = useContext(ThemeContext)

    const handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }

    useEffect(() => {
        navigate(`/search?name=${queryParams}`)
    }, [queryParams])

    return (
        <div className={themeContext.theme === 'dark' ? 'bg-blue-600' : 'bg-gray-400'}>
            <div className="container mx-auto py-2">
                <div className="flex justify-between items-center">
                    <ul className='flex gap-8'>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "font-bold text-blue-700!" : ""} to="/">{t('home')}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "font-bold text-blue-700!" : ""} to="/about">{t('about')}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "font-bold text-blue-700!" : ""} to="/products">{t('products')}</NavLink>
                        </li>
                    </ul>
                    <div className='flex gap-4'>
                        <Search
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            onChange={(ev) => setQueryParams(ev.target.value)}
                            size="large"
                        />
                        <MdGTranslate className="text-3xl cursor-pointer" onClick={handleLanguage} />
                        <Button shape="circle" onClick={themeContext.handleTheme} icon={themeContext.theme === 'dark' ? <FaSun /> : <FaMoon />} />
                    </div>
                </div>
            </div>
        </div>
    )
}
