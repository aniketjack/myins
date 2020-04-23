import { Component, OnInit } from '@angular/core';
import { multi, stat } from './datasets/datasets';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  multi: any[];
  stat: any[];
  view;

  // line options
  legend: boolean = true;
  legendPosition = 'below';
  legendTitle = 'Policies';
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Month,2020';
  yAxisLabel: string = 'Policy Sale';
  timeline: boolean = true;
  colorScheme = {
    domain: ['#F28031', '#0A923B', '#4B87E4', '#B64F92']
  };

  cardColor: string = '#232837';

  constructor() {
    Object.assign(this, { multi });
    Object.assign(this, { stat });
  }

  ngOnInit(): void {

  }

}
