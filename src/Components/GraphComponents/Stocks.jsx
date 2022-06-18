import React from 'react'
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function Stocks() {
    let data= [{
        "x": new Date('2012-04-02T00:00:00.000Z'),
        "open": 320.705719,
        "high": 324.074066,
        "low": 317.737732,
        "close": 323.783783,
        "volume": 45638000
    }, {
        "x": new Date('2012-04-03T00:00:00.000Z'),
        "open": 323.028015,
        "high": 324.299286,
        "low": 319.639648,
        "close": 321.631622,
        "volume": 40857000
    }, {
        "x": new Date('2012-04-04T00:00:00.000Z'),
        "open": 319.544556,
        "high": 319.819824,
        "low": 315.865875,
        "close": 317.892883,
        "volume": 32519000
    }, {
        "x": new Date('2012-04-05T00:00:00.000Z'),
        "open": 316.436432,
        "high": 318.533539,
        "low": 314.599609,
        "close": 316.476471,
        "volume": 46327000
    }];
  return (
   
      <StockChartComponent id='stockchart' primaryXAxis={{
            valueType: 'DateTime',
            majorGridLines: { width: 0 }, majorTickLines: { color: 'transparent' },
            crosshairTooltip: { enable: true }
        }} primaryYAxis={{
            labelFormat: 'n0',
            lineStyle: { width: 0 }, rangePadding: 'None',
            majorTickLines: { width: 0 }
        }} height='350'>
            <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,
            EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
            AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
            <StockChartSeriesCollectionDirective>
                <StockChartSeriesDirective dataSource={data}  type='Candle'>
                </StockChartSeriesDirective>
            </StockChartSeriesCollectionDirective>
        </StockChartComponent>
   
  )
}

export default Stocks
