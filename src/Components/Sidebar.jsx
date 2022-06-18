import React,{useEffect, useState} from 'react'
import {AiFillAccountBook, AiFillCaretLeft, AiFillCustomerService, AiFillDatabase, AiFillDownCircle, AiFillLeftCircle, AiFillLeftSquare, AiFillPieChart, AiFillRightCircle, AiFillSketchSquare, AiOutlineLaptop} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Routes,Route} from 'react-router-dom'
import {connect } from 'react-redux';
import store from './Context/Store';
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
function mapStateToProps(state){
    console.log(state,'MAPSTATETOPROPS')
    return{
      open:state
    }
      }

function Sidebar(props) {
  const [showChartMenu,setChartMenu] = useState(false);


  const [showSubMenu,setSubMenu] = useState(false)


const propHandle = ()=>{
    props.dispatch({type:
'NOT_VISIBLE'})
}


console.log(props,'These are my Props')
  return (
    <div class= {props.open?' fixed  overflow-scroll  bottom-0 flex flex-col w-[40vh] h-screen min-h-full dark:bg-slate-800 bg-slate-200 transition-all ':' flex flex-col w-[0vh] h-full dark:bg-slate-800 bg-slate-200 transition-all overflow-hidden'}>

        <h1 class='dark:text-slate-300 pl-[10vh]  text-xl font-semibold decoration-2  p-10 whitespace-nowrap'><AiOutlineLaptop /><div class='dark:text-white relative left-10 bottom-[3vh] '> Store </div><span class='absolute right-5 top-10'><button  onClick={propHandle}>{props.open?'X':''}</button></span></h1>

    

<a class='p-10 pl-[10vh] hover:dark:bg-slate-900 hover:bg-slate-400 hover:text-green-900  hover:dark:text-slate-300 cursor-pointer transition-all text-slate-900 dark:text-slate-400 dark:text-sky-300'><Link to='/'><BiHomeAlt /> Home</Link></a>
<a  class='p-10 pl-[10vh] hover:bg-slate-400 hover:dark:bg-slate-900 cursor-pointer transition-all text-slate-600 dark:text-sky-300' onClick={()=>setSubMenu(!showSubMenu)}><AiOutlineShoppingCart  /> Orders <br></br>{showSubMenu?<div class='flex p-4 gap-10 pl-[5vh] flex-col p-4'><a class='dark:text-green-300 p-10 hover:bg-blue-900 rounded-full text-green-600   p-1' onClick={()=>setSubMenu(showSubMenu)}>  <AiFillRightCircle /><Link to='/customers'>Customers</Link></a><a class=' p-1 hover:bg-blue-700  dark:text-green-300 text-green-600 rounded-full  ' onClick={()=>setSubMenu(showSubMenu)}><AiFillRightCircle /><Link to='/staff'>Staff</Link></a><a class='p-1 hover:bg-blue-600 rounded-full  dark:text-green-300 text-green-600 ' onClick={()=>setSubMenu(showSubMenu)}><AiFillRightCircle /><Link to='/products'>Products</Link></a></div>:<a></a>}</a>
<a class='p-10 pl-[10vh] hover:dark:bg-slate-900 cursor-pointer transition-all hover:bg-slate-400 text-slate-600 dark:text-sky-300 transition-all text-green-300' onClick={()=>setChartMenu(!showChartMenu)} ><AiFillPieChart />Charts {showChartMenu?<div class='pl-10'>
<Link to='/sparkline' > <a class='text-green-300'> <AiFillRightCircle />Sparkline </a></Link> <br></br>
<Link to='/barchart'> <a class='text-green-300'> <AiFillRightCircle />Bar </a></Link> <br></br>
<Link to='/stocks'> <a class='text-green-300'> <AiFillRightCircle />Stocks </a></Link> 
</div>:<div class='w-0 overflow-hidden transition-all'></div>}</a>
<a class='p-10 pl-[10vh] hover:dark:bg-slate-900 cursor-pointer transition-all hover:bg-slate-400 text-slate-600 dark:text-sky-300'><Link to='/about'><AiFillAccountBook /> About</Link></a>



    


   
    </div>
    



  )
}

export default connect (mapStateToProps)(Sidebar)
