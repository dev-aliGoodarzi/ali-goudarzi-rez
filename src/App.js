import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Pages/Home/Home'

const App = () => {
    const [themeColor, setThemeColor] = useState("#ee6192")
    return <>
        <Sidebar themeColor={themeColor} setThemeColor={setThemeColor} />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>


}

export default App