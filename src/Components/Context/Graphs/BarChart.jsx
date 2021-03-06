import React from 'react'
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
function BarChart() {
  return (
    <div>
      <ChartComponent id='charts' primaryXAxis={{valueType: 'Category'}} width="400" height='300'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={[
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ]} xName='month' yName='sales' type='Column' name='Sales'/>

      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default BarChart
