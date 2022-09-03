import React from 'react'
import {Routes,Route} from 'react-router-dom'
import UserHome from '../UserHome'


const Custroute = () => {
  return (
    <Routes>
         <Route path="/userhome" element={<UserHome/>} />
    </Routes>
  )
}

export default Custroute
