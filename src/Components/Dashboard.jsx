import React from 'react';
import {connect } from 'react-redux';
import {ChartComponent,Inject,LineSeries, Sparkline} from '@syncfusion/ej2-react-charts'
import LineGraph from './Context/Graphs/LineGraph';
function mapStateToProps(state){

    return{
      open:state
    }
      }
 
function Dashboard(props) {
  const RecentActivity = () =>{
    return(
    <div class='border-2 h-10  md:p-3 dark:bg-slate-600 w-[40vh] h-[40vh] ml-[3vh] rounded-xl md:ml-[20vh] mt-[10vh] '>
    
    </div>)
  }
  return (
    <div class={props.open?'pl-[42vh]     transition-all':'   h-[10vh] transition-all '}>

        <div class='rounded-3xl w-[80%] ml-[10%] mt-[5%]  h-[15vh] bg-slate-200 dark:bg-slate-600 pr-10 border-rounded ' >
        <h1 class='dark:text-slate-300 p-4 font-semibold text-xl text-slate-800  '>

            Welcome Adi

        </h1>
        <code class='dark:text-slate-400 pl-10'>last visited:02-09-2022</code>
        <div class='float-right mb-10 relative md:bottom-5 md:p-3 bottom-15 p-2 dark:bg-slate-900 dark:text-white rounded-xl hover:dark:bg-slate-500 hover:bg-slate-300 '><button>Show sales</button></div>

        </div>

        <div class='  ml-[10%] mt-[2%] dark:bg-slate-700 bg-slate-300 dark:text-white w-[80%] h-[60vh] rounded-xl  p-10 font-semibold overflow-hidden'> Recent Updates
        
      {/*planning data for the dashboard
      Total revenue- gets a card
      Total Sales - gets a card
      Graph on side - 


      */}
<br></br>
<br></br>

      <span class='text-2xl  font-semibold '>204354$ <code class='text-sm w-4 dark:text-gray-900 text-gray-600 p-3 dark:bg-green-300 rounded-full hover:shadow-2xl transition-all '>Total$</code></span>
      <div class='float-right'>
  
        <LineGraph color='lightgreen' />
      </div>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>


      <span class='text-2xl  font-semibold '>105420 <code class='text-sm w-4 dark:text-gray-900 text-gray-600 p-3 dark:bg-red-300 rounded-full hover:shadow-2xl transition-all '>Items sold</code></span>

      
        
        </div>
    
    </div>
  )
}

export default connect(mapStateToProps)(Dashboard)
