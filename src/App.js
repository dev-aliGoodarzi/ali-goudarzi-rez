import React, { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {
    const [themeColor, setThemeColor] = useState("#ee6192")
    return <>
        <Sidebar themeColor={themeColor} setThemeColor={setThemeColor} />
        
    </>


}

export default App