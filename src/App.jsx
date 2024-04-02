import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './styles.scss'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
const {currentUser} = useContext(AuthContext);
console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path='register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
