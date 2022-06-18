import { BarSeries } from '@syncfusion/ej2-react-charts';
import React from 'react'
import {connect} from 'react-redux'; 
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
function mapStateToProps(state){
    return {
        open:state
        
    }
}
 function BarComponent(props) {

    //redefining data

    const data = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];


  return (
    <div class={props.open?'ml-[40vh] p-10':''}>
        <div class='dark:bg-slate-800 w-[100%]'>
            <span class='text-xl dark:text-white font-semibold p-10 h-[5vh]'>Bar Chart</span>
            </div>
            <div class='p-10'>
      <ChartComponent fill='aqua' class='transition-all' background='ultramarine' width='800' id="charts" class='bg-red-400' primaryXAxis={{ valueType: 'Category', title: 'Month' }} primaryYAxis={{ minimum: 0, maximum: 80, interval: 20, title: 'Sales' }} legendSettings={{visible:true}} tooltip={{enabled:true,shared:false}}>
      <Inject services={[ColumnSeries, Tooltip, BarSeries, Category]}/>
  <SeriesCollectionDirective>
    <SeriesDirective  fill='aqua' dataSource={data} type='Column' xName='month' yName='sales' name='Sales' />
  </SeriesCollectionDirective>
</ChartComponent></div>
      
    </div>
  )
}
export default connect(mapStateToProps)(BarComponent)