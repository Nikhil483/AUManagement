import { Component, OnInit } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public yearChartType: string = 'bar';
  public skillChartType: string = 'horizontalBar';
  public locChartType: string = 'pie';
  public HMChartType: string = 'doughnut';

  public yearChartDatasets: Array<any> = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Number Of Oppurtunity Every Year',
    },
  ];
  public skillChartDatasets: Array<any> = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Frequency of skills',
    },
  ];
  public locChartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'Number Of Oppurtunities For Each Location' }
  ]
  public HMChartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'Frequency of Hiring Manager Stats Allotment' }
  ]

  public yearChartLabels: Array<any> = [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
  ];
  public skillChartLabels: Array<any> = [
    'Angular',
    'Spring Boot',
    'DataBase',
    'Machine learning',
    'Devolps',
    'BlockChain',
  ];
  public locChartLabels: Array<any> = ['Bangalore', 'Kolkata', 'Hyderabad', 'Delhi', 'Mumbai'];
  public HMChartLabels: Array<any> = ['Suresh', 'Ramesh', 'Sangeetha', 'Arun', 'Preksha'];
  
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
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
  };

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
