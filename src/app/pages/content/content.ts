import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dummyData } from '../../dummyData/dummyData';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit{
  contentImg: string = ""

  contentTitle: string = ""

  contentText: string = ""
  
  private Id: string| null = ""

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(value => this.Id = value.get("id"))
    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id:string| null):void {
    const result = dummyData.filter(aside => aside.id.toString() === id)[0]
    this.contentImg = result.img
    this.contentText = result.text
    this.contentTitle = result.title
  }
}