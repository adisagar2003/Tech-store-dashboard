import React from 'react'
import {connect} from 'react-redux';
function mapStateToProps(state){
    console.log(state,'MAPSTATE TO PROPS')
    return {
        open:state
    }
}
function Orders(props) {
  return (
    <div class={props.open?'ml-[40vh]  border-2 border-red-500 text-red-400':'ml-0 text-white border-2 border-red-900' } >
      Orders
    </div>
  )
}

export default connect(mapStateToProps)(Orders)
