import React from 'react'
import LineGraph from '../Context/Graphs/LineGraph'
import {connect} from 'react-redux';
import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts'
function mapStateToProps(state){
    return {
        open:state
    }
}
function Sparkline(props) {



    const data = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];


  return (
    <div class={props.open?'md:w-[100%] p-10 h-[60-vh] pl-[40vh] transition-all scale-200':'md:w-[100%] md:p-10 transition-all  h-[60-vh] scale-200'}>
     <div class='dark:bg-slate-800 w-[100%]'>
            <span class='text-xl dark:text-white font-semibold p-10 h-[5vh]'>Line Chart</span>
            </div>
            <div class='p-10'>
      <ChartComponent fill='red' class='transition-all' background='ultramarine' width='800' id="charts" class='bg-red-400' primaryXAxis={{ valueType: 'Category' }} legendSettings={{visible:true}} tooltip={{enabled:true,shared:false}}>
  <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
  <SeriesCollectionDirective>
    <SeriesDirective  fill='red' dataSource={data}  xName='month' yName='sales' name='Sales' />
  </SeriesCollectionDirective>
</ChartComponent></div>
    </div>
  )
}

export default connect(mapStateToProps)(Sparkline)
