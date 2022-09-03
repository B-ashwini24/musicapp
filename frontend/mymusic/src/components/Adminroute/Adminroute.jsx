import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Artist from '../Artist'
import Home from '../Home'
import Song from '../Song'

const Adminroute = () => {
  return (
    <Routes>
         <Route path="/artist" element={<Artist />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/song" element={<Song/>} />
      
    </Routes>
  )
}

export default Adminroute
