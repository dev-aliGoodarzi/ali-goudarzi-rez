import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Setting from './Components/Setting/Setting'
import Sidebar from './Components/Sidebar/Sidebar'


import { FiSettings } from "react-icons/fi"


import styles from "./App.module.css"
const App = () => {
    const [themeColor, setThemeColor] = useState("#ee6192")
    const [isRTL, setIsRTL] = useState(false)
    useEffect(() => {
        document.getElementById('root').style.transition = "1s ease all"
        document.getElementById('root').style.direction = `${isRTL ? "rtl" : "ltr"}`
    })
    return <>
        <Sidebar themeColor={themeColor} />
        <Setting setThemeColor={setThemeColor} themeColor={themeColor} setIsRTL={setIsRTL} />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

    </>


}

export default App