import { Component, OnInit } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';

import { TrendsService } from '../../services/trends.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  constructor(private trendsService: TrendsService) {}

  OppurnityByYear: any;
  SkillFrequency: any;
  LocationFrequency: any;
  ManagerFrequency: any;

  yearChartDatasets:Array<any>;
  yearChartLabels: Array<any>;

  skillChartDatasets
  skillChartLabels

  locChartDatasets
  locChartLabels

  HMChartDatasets
  HMChartLabels


  ngOnInit(): void {
    this.trendsService.getOppurnityByYear().subscribe((res) => {
      console.log(res);
      this.OppurnityByYear = res;
      this.yearChartDatasets = [
        {
          data: this.getValues(this.OppurnityByYear),
          label: 'Number Of Oppurtunity Every Year',
        },
      ];
      this.yearChartLabels = Object.keys(this.OppurnityByYear);
      //console.log(this.yearChartLabels,this.yearChartDatasets)
    });

    this.trendsService.getSkillFrequency().subscribe((res) => {
      console.log(res);
      this.SkillFrequency = res;
      this.skillChartDatasets = [
        {
          data: this.getValues(this.SkillFrequency),
          label: 'Frequency and Most Wanted Skills',
          minimum : 0
        },
      ];
      this.skillChartLabels = Object.keys(this.SkillFrequency);
      //console.log(this.yearChartLabels,this.yearChartDatasets)
    });

    this.trendsService.getLocationFrequency().subscribe((res) => {
      console.log(res);
      this.LocationFrequency = res;
      this.locChartDatasets = [
        {
          data: this.getValues(this.LocationFrequency),
          label: 'Number Of Oppurtunity Every Year',
        },
      ];
      this.locChartLabels = Object.keys(this.LocationFrequency);
      //console.log(this.yearChartLabels,this.yearChartDatasets)
    });

    this.trendsService.getManagerFrequency().subscribe((res) => {
      console.log(res);
      this.ManagerFrequency = res;
      this.HMChartDatasets = [
        {
          data: this.getValues(this.ManagerFrequency),
          label: 'Number Of Oppurtunity Every Year',
          
        },
      ];
      this.HMChartLabels = Object.keys(this.ManagerFrequency);
      //console.log(this.yearChartLabels,this.yearChartDatasets)
    });
  }

  public getValues(json) {
    let values = [];
    let keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
      values.push(json[keys[i]]);
    }
    console.log(values);
    return values;
  }

  public yearChartType: string = 'bar';
  public skillChartType: string = 'horizontalBar';
  public locChartType: string = 'pie';
  public HMChartType: string = 'doughnut';

  public yearChartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 3,
    },
  ];
  public skillChartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ];
  public locChartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: [
        '#FF5A5E',
        '#5AD3D1',
        '#FFC870',
        '#A8B3C5',
        '#616774',
      ],
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
  };

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
