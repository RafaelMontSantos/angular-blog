import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css',
})
export class BigCard {
  @Input()
  cardImage: string = ""
  
  @Input()
  cardTitle: string = ""

  @Input()
  cardNews: string = ""
  
  @Input()
  Id: number = 0;

  constructor(){

  }
}
