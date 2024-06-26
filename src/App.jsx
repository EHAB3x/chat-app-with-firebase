import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './styles.scss'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
const {currentUser} = useContext(AuthContext);
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children})=>{
  if(!currentUser){
    return <Navigate to="/login"/>
  }else{
    return children;
  }
}
  return (
    <HashRouter>
      <Routes>
        <Route index element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
