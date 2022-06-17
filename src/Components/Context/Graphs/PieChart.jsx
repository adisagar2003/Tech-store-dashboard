import React from 'react'
import {BulletChartComponent,BulletRangeCollectionDirective,BulletRangeDirective,BulletTooltip,Inject} from '@syncfusion/ej2-react-charts';

function PieChart() {
  return (
    
    <div class='bg-slate-300 w-[80%]  '>
      <BulletChartComponent id='ranges' fill='aqua' animation={{ enable: true }}  tooltip={{enable:true}} height="300"   width='350' valueField='value' targetField='comparativeMeasureValue' categoryField='category' minimum={0} maximum={20} interval={5} dataSource={[{ value: 5, comparativeMeasureValue: 7.5, category: '2015' },
            { value: 7, comparativeMeasureValue: 5000, category: '2022' },
            { value: 10, comparativeMeasureValue: 6, category: '2021' },
            { value: 5, comparativeMeasureValue: 8, category: '2020' },
            { value: 12, comparativeMeasureValue: 5, category: '2019' },
            { value: 8, comparativeMeasureValue: 6, category: '2018' }]}>
              <Inject services={[BulletTooltip]} />
                        <BulletRangeCollectionDirective>
                            <BulletRangeDirective   end={5}></BulletRangeDirective>
                            <BulletRangeDirective end={15}></BulletRangeDirective>
                            <BulletRangeDirective end={20}></BulletRangeDirective>
                        </BulletRangeCollectionDirective>

            </BulletChartComponent>
    </div>
  )
}

export default PieChart
