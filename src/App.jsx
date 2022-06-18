import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Test1 from './Components/Test1';
import Sidebar from './Components/Sidebar';
import BarComponent from './Components/GraphComponents/BarComponent';
import { Provider } from 'react-redux'
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Charts from './Components/Charts';
import Orders from './Components/Context/Orders';
import {connect } from 'react-redux';
import Customers from './Components/Customers';
import Product from './Components/Product';
import Staff from './Components/Staff';
import Sparkline from './Components/GraphComponents/Sparkline';
import Stocks from './Components/GraphComponents/Stocks';
function mapStateToProps(state){
  console.log('Dark mode prop',state)
  return {
    dark:state
  }
}
var isDark = false;
function App(props) {

  function getItem(){
  
    setInterval(

       isDark =localStorage.getItem('dark')
     ,1000)
    return isDark
  }



  return (
    <div class='transition-all' >
      {console.log(props.dark,'Darkmode')}
      <div class={isDark?'dark':''}>
      <Navbar />
      <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<Dashboard />} /> 
        <Route exact path='/about'element={<About /> } />
        <Route exact path='/charts' element={<Charts />} />
       
        <Route exact path='/customers' element={<Customers />} />
        <Route exact path='/products' element={<Product />} />`
        <Route exact path='/staff' element={<Staff />} /> 
        <Route exact path='/sparkline' element={<Sparkline />} />
      <Route exact path='/barchart' element={<BarComponent /> } />
      <Route exact path='/stocks' element={<Stocks />} />
      </Routes>
      <Sidebar />
      </BrowserRouter>
      </div>




      
      
  
  
    </div>
  )
}

export default connect(mapStateToProps)(App)
