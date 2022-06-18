import React from 'react'
import LineGraph from './Context/Graphs/LineGraph'
import {connect } from 'react-redux';
import PieChart from './Context/Graphs/PieChart';
import BarChart from './Context/Graphs/BarChart';
function mapStateToProps(state){
  
  return {
    open:state
  }
}
function Charts(props) {

  return (
 
    <div class={props.open?'ml-[40vh] md:flex  md:flex-row flex-wrap-2 gap-[20vh] w-[30%] transition-all p-5 ':'ml-[0vh] md:flex md:flex-row gap-[20vh] w-[30%] transition-all p-5'}>
 
    <div class='dark:bg-slate-7 00 dark:bg-slate-900 bg-slate-300 ml-[60%]'>

    
    <LineGraph color='red' class='scale-50' />
    </div>
    <div>
      
  
      
    </div>
    <div>
    
   
      </div>


    </div>
   
      
  
  )
}

export default connect(mapStateToProps)(Charts)
