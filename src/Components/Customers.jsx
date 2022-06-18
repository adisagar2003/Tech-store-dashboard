import React from 'react'
import {connect } from 'react-redux';
function mapStateToProps(state){
return {
    open:state
}
}
function Customers(props) {
  return (
    <div class={props.open?'p-10 ml-[40vh]':'p-10'}>
      <div class='p-4 pl-[10vh] pb-[1vh] w-[100%] h-[10vh] bg-slate-200 dark:bg-slate-700 dark:text-slate-200 text-slate-900'>
    <h1 class='text-xl font-semibold'>Customers</h1>
      </div>
     <div class='mt-10 w-[100%] p-4 dark:bg-slate-500 bg-slate-200'>
       a
     </div>
    </div>
  )
}

export default connect(mapStateToProps)(Customers)
