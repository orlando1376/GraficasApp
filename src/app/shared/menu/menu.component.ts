import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  descripcion: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    { ruta: '/graficas/barra', descripcion: 'Barras'},
    { ruta: '/graficas/barra-doble', descripcion: 'Barras Dobles'},
    { ruta: '/graficas/dona', descripcion: 'Dona'},
    { ruta: '/graficas/dona-http', descripcion: 'Dona Http'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
