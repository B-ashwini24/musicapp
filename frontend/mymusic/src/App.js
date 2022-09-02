
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
 import Navbar from './components/Navbar';
import Artist from './components/Artist';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
       <Navbar/> 
     <Routes>
         <Route path="/artist" element={<Artist />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/song" element={<Song/>} />
      
      </Routes>
     
    </div>
  );
}

export default App;
