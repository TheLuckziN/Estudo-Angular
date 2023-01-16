import { Component, OnChanges, OnInit, Input, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{

  @Input() public title:string = "Ola mundo" 

  constructor() {}

    ngOnInit(): void {}
    ngOnChanges(changes: SimpleChanges): void {}

    ngOnDestroy(): void {
      console.log(`O componente foi destruido!`)      
    }

}
