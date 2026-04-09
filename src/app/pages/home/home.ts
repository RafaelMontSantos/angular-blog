import { Component } from '@angular/core';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { BigCard } from "../../components/big-card/big-card";
import { SmallCard } from '../../components/small-card/small-card';
import { dummyData } from "../../dummyData/dummyData"

@Component({
  selector: 'app-home',
  imports: [MenuTitle, BigCard, SmallCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  id: number[] = []
  img: string[] = []
  title: string[] =[]
  text: string[] = []

  constructor (){
    dummyData.map((element) =>{
      this.id.push(element.id)
      this.img.push(element.img)
      this.title.push(element.title)
      this.text.push(element.shortText)
    })
  }
}
