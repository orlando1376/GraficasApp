import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ];

  constructor( private graficaService: GraficasService ) { }

  ngOnInit(): void {
    // this.graficaService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    //   })
   
    // otro ejemplo en el que el servivio devuelve la data ya formateada
    this.graficaService.getUsuariosRedesSociales2()
      .subscribe( data => {
        this.doughnutChartLabels = data.labels;
        this.doughnutChartData.push(data.values);
      })
    
  }

}
