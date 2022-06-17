import React from 'react'
import {connect} from 'react-redux';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import DataGridDemo from './Graphs/DataGrid';

function mapStateToProps(state){
    console.log(state,'MAPSTATE TO PROPS')
    return {
        open:state
    }
}
function Orders(props) {
  return (


    <div class={props.open?'ml-[40vh]  dark:text-white p-4':'ml-0 dark:text-white p-4' } >
      <div class='p-4 text-2xl dark:text-slate-300 font-semibold'> Recent Customers</div>
<div class='float-right'>
    <CalendarComponent></CalendarComponent>
    
    </div>
  <DataGridDemo />
    </div>
  )
}

export default connect(mapStateToProps)(Orders)
