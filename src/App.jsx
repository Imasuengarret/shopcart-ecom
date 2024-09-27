import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './Component/NavItems'
import Footer from './Component/Footer'

function App() {
  

  return (
    <>
    
    <NavItems/>
    <div className='min-vh-100'>
     <Outlet/>
    </div>
     <Footer/>
    </>
  )
}

export default App
