import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Test1 from './Components/Test1';
import Sidebar from './Components/Sidebar';

import { Provider } from 'react-redux'
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Charts from './Components/Charts';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      
     
      <Navbar />
      <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<Dashboard />} /> 
        <Route exact path='/about'element={<About /> } />
        <Route exact path='/charts' element={<Charts />} />

      </Routes>
      <Sidebar />
      </BrowserRouter>




      
      
  
  
    </div>
  )
}

export default App
