import React,{useEffect, useState} from 'react'
import {AiFillAccountBook, AiFillCaretLeft, AiFillPieChart, AiOutlineLaptop} from 'react-icons/ai'
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




const propHandle = ()=>{
    props.dispatch({type:
'NOT_VISIBLE'})
}


console.log(props,'These are my Props')
  return (
    <div class= {props.open?' absolute  bottom-0 flex flex-col w-[40vh] h-screen min-h-full dark:bg-slate-800 bg-slate-200 transition-all ':' flex flex-col w-[0vh] h-full dark:bg-slate-800 bg-slate-200 transition-all overflow-hidden'}>

        <h1 class='dark:text-slate-300 pl-[10vh]  text-xl font-semibold decoration-2  p-10 whitespace-nowrap'><AiOutlineLaptop /><div class='dark:text-white relative left-10 bottom-[3vh] '> Store </div><span class='absolute right-5 top-10'><button  onClick={propHandle}>{props.open?'X':''}</button></span></h1>



<a class='p-10 pl-[10vh] hover:bg-slate-400 hover:text-green-900  hover:dark:text-slate-800 cursor-pointer transition-all text-slate-600 dark:text-slate-400 dark:text-sky-300'><Link to='/'><BiHomeAlt /> Home</Link></a>
<a class='p-10 pl-[10vh] hover:bg-slate-400 cursor-pointer transition-all text-slate-600 dark:text-sky-300'><Link to='/orders'><AiOutlineShoppingCart /> Orders</Link></a>
<a class='p-10 pl-[10vh] hover:bg-slate-400 cursor-pointer transition-all text-slate-600 dark:text-sky-300'><Link to='/charts'><AiFillPieChart />Charts</Link></a>
<a class='p-10 pl-[10vh] hover:bg-slate-400 cursor-pointer transition-all text-slate-600 dark:text-sky-300'><Link to='/about'><AiFillAccountBook /> About</Link></a>


    


   
    </div>
    



  )
}

export default connect (mapStateToProps)(Sidebar)
