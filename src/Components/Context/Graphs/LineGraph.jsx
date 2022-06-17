import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

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

<div class='animate-pulse'>
<SparklineComponent id='sparkline' height='200px' width='500px' axisSettings={{
            minX: -1, maxX: 7, maxY: 8, minY: -1
        }} fill='aqua' valueType='Category' xName='x' yName='y' dataSource={[
            { x: 'January', y: 3 },
            { x: 'Tue', y: 5 },
            { x: 'Wed', y: 1},
            { x: 'Thu', y: 4 },
            { x: 'Fri', y: 6 },
        ]} 
        // To enable tooltip for sparkline
        tooltipSettings={{
            visible: true,
            // formatting tooltip text
            format: '${x} : ${y}000 sales'
        }}>
    <Inject services={[SparklineTooltip]}/>
</SparklineComponent>
 
    </div>
    <h1 class='ml-[30vh] dark:text-slate-300 text-slate-900'> <u>Sales</u></h1>
    </div>
  )
}

export default LineGraph
