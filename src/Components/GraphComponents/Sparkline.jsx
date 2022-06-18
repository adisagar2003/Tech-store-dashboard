import React from 'react'
import LineGraph from '../Context/Graphs/LineGraph'
import {connect} from 'react-redux';
function mapStateToProps(state){
    return {
        open:state
    }
}
function Sparkline(props) {
    
  return (
    <div class={props.open?'w-[100%] p-10 h-[60-vh] pl-[40vh] transition-all scale-200':'w-[100%] p-10 transition-all  h-[60-vh] scale-200'}>
        <LineGraph  color='red'/>
      
    </div>
  )
}

export default connect(mapStateToProps)(Sparkline)
