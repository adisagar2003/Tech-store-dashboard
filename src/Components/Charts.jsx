import React from 'react'
import LineGraph from './Context/Graphs/LineGraph'
import {connect } from 'react-redux';
import PieChart from './Context/Graphs/PieChart';
function mapStateToProps(state){
  return {
    open:state
  }
}
function Charts(props) {

  return (
   
    <div class={props.open?'ml-[40vh] flex flex-row gap-[20vh] w-[30%] transition-all ':'ml-[0vh] flex flex-row gap-[20vh] w-[30%] transition-all'}>
 
    <div class='dark:bg-slate-800 bg-slate-300'>

   
    <LineGraph color='limegreen' />
    </div>
    <div>

      <PieChart />
    </div>

    </div>
  
  )
}

export default connect(mapStateToProps)(Charts)
