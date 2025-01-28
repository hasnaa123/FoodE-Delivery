import React from 'react'
import SideBar from './Componenets/SideBar/SideBar'
import Navbar from './Componenets/Navbar/Navbar'



const App = () => {
  

  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <SideBar />
      </div>
    </div>
  )
}

export default App
