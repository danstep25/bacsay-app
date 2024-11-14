import { Component } from '@angular/core';
import { WaterFlowRate1, WaterLevelSampleData1, WaterLevelSampleData2 } from '../../../Shared/sample/water-flow-sample-data';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  WaterLevelSampleData1: any[];
  WaterLevelSampleData2: any[];
  WaterFlowRateData1: any[];

  view: [number, number] = [1000, 370];
  gaugeDimension:  [number, number] = [1000, 570];
  maxGaugeValue = 100;
  angleSpan = 180;
  startAngle = 270;
  showText = true;
  largeSegments = 5;
  smallSegments = 5;
  textValue = 'Water Flow Rate';
  colorScheme = {
    domain: ['#704fc4', '#4b852c']
  };
  schemeType = ScaleType.Ordinal;
  gradient = 'false';
  legendTitle = 'Water Level';
  legendPosition = LegendPosition.Below;
  legend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = 'Cubic per Foot';
  xAxisLabel = 'Station 1';
  xAxisLabe2 = 'Station 2';
  yAxis = true;
  xAxis = true;
  animations = true;
  showGridLines = true;
  showDataLabel = true;
  barPadding = 5;
  tooltipDisabled = false;
  roundEdges = false; 

  constructor(){
    this.WaterFlowRateData1 = WaterFlowRate1;
    this.WaterLevelSampleData1 = WaterLevelSampleData1
    this.WaterLevelSampleData2 = WaterLevelSampleData2
  }
}
