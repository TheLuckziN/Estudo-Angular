import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {}

    public nome:string = "Nicolle";
    public idade:number = 15;

    public checkedDisabled:boolean = true;
    public imgSrc:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/DeCSS.PNG/300px-DeCSS.PNG"
    public imgTitle:string = "Property Biding"

    public position: {x:number, y:number} = {x: 0, y: 0};
    public alertaInfo (valor:MouseEvent) {
      console.log(valor);
    }
    public mouseMoveTeste(valor:MouseEvent) {
      this.position.x = valor.offsetX;
      this.position.y = valor.offsetY;
    }

}
