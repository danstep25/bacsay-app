import { Component, OnInit, OnDestroy } from '@angular/core';
import { WaterFlowRate1, WaterLevelSampleData1, WaterLevelSampleData2 } from '../../../Shared/sample/water-flow-sample-data';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { DashboardService } from '../../../Services/dashboard.service';
import { tap, map, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
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

  waterLevel$ : any;
  waterFlowRate$ : Observable<any[]>;

  constructor(
    private readonly _dashboardService: DashboardService,
    private readonly _datePipe: DatePipe
  ){
    this.WaterFlowRateData1 = WaterFlowRate1;
    this.WaterLevelSampleData1 = WaterLevelSampleData1
    this.WaterLevelSampleData2 = WaterLevelSampleData2

    this.waterFlowRate$ = this._dashboardService.getAllWaterFlowRate()
    .pipe(
      map((data: any[]) => {
        return data.map((waterFlowValue: any) => {
          return {
            ...waterFlowValue,  // Retain the original properties
            name: this._datePipe.transform(waterFlowValue.timeStamp.toDate(), 'short')  // Format the timestamp
          };
        });
      })
    );
  }
  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.observeList();
  }

  observeList(){
    this.waterLevel$ = this._dashboardService.getAllWaterLevel()
    .pipe(tap((data: any) => {
      data.reverse();
      data.map((waterLevelValue: any) =>{
        waterLevelValue.name = this._datePipe.transform(waterLevelValue.timeStamp.toDate(), 'short');
      })
    }));

    
  }
}
