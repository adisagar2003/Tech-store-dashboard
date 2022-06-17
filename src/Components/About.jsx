import React from 'react'
import {connect } from 'react-redux';
function mapStateToProps(state){
 console.log(state,'MAPSTATE TO PROPS')
  return{
    open:state
  }
    }
function About(props) {
console.log(props,'This is good')
  return (
    <div class={props.open?'ml-[19.5%]':'ml-[0]'} >
    <div class=' transition-all'>
     <h1 class='text-5xl p-10 font-semibold ml-[19vh] bg-slate-100 dark:bg-slate-700 w-[20%] mt-10 transition-all rounded-2xl shadow-2xl'>

     About
     </h1>
     <p class='p-10  font-semibold text-2xl ml-[25vh] dark:text-slate-300 text-slate-600 '>
      This is a fully responsive interactive app built with Tailwind CSS, Syncfusion for data visualization. Redux was used in many places for state management in this program.     
      
     </p>

     <p class='absolute bottom-0 text-slate-600 dark:text-slate-300 ml-[40%]'>
      made by <i>Aditya Sagar</i>, a <span class='font-bold'>full stack</span> dev. 
     </p>
    </div>
    </div>
  )
}

export default connect(mapStateToProps)(About)
