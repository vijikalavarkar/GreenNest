import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Service from './Pages/Service/Service'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Error from './Pages/Error/Error'
import Logout from './Pages/Logout/Logout'
import ResetPassword from './Pages/ResetPassword/ResetPassword'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='*' element={<Error />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
