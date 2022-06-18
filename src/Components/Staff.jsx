import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {connect} from 'react-redux';
import { Card } from '@mui/material';
function mapStateToProps(state){
    return {
        open:state
    }

}
function Staff(props) {
  return (
    <div class={props.open?'ml-[40vh] p-10 transition-all':'transition-all p-10'}>
        
    <div class='p-3 dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-200     text-2xl font-semibold h-[70vh]'>Staff
    <div class='p-3 flex flex-auto '>
    
    </div>
    <br>
    </br>



    </div>
    <div class='p-10'>
    
    </div>

    </div>
  )
}

export default connect(mapStateToProps)(Staff)
