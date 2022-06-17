import { Category, ChartComponent, ColumnSeries, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';


import React from 'react'

function LineGraph() {
//Putting the chart data
 let chartData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
//X axis 


  return (
    <div >

    <div class='md:scale-100 scale-50 relative md:bottom-[20vh] bottom-[1vh] md:left-0 left-[22vh] ' >
   
        <ChartComponent title="Sales Analysis" id="charts" primaryXAxis={{valueType:"Category",majorGridLines:{width:0},minorGridLines:{width:0}}} background="#324154" color='white'
        primaryYAxis={{title:"Sales"}} legendSettings={{visible:true}} >
            <Inject services={[LineSeries,Category,ColumnSeries,Legend]} ></Inject>
            <SeriesCollectionDirective>
            <SeriesDirective type='Line' dataSource={chartData} xName="month" yName="sales"  ></SeriesDirective>
            </SeriesCollectionDirective>
            
        </ChartComponent>
      
    </div>
    </div>
  )
}

export default LineGraph
