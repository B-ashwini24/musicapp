
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Adminroute from './components/Adminroute/Adminroute';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar'
import Custroute from './components/Custroute/Custroute';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
function App() {
  const userInfo = useSelector(state => state)
  console.log(userInfo)
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token')))
  }, [userInfo])

  return (
    <>
      {/* <Navbar /> */}
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
       
      </Routes>
      {token?.isAdmin ?
            <Adminroute />:
          <Custroute />
        }
    </>
  );
}

export default App;
