import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-data-biding></app-data-biding>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit{
  
  constructor() {}
  //ngOnInit = Evento para quando a aplicação for carregada
  ngOnInit(): void {

  }

}