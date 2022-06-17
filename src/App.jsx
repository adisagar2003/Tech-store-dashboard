import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Test1 from './Components/Test1';
import Sidebar from './Components/Sidebar';

import { Provider } from 'react-redux'
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      
      <BrowserRouter>
      <Navbar />
      <Dashboard />
<Sidebar />



      
      
      </BrowserRouter>
  
    </div>
  )
}

export default App
