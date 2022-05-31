import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
//refactored hero property to be of type Hero
  hero: Hero = {
    id : 1,
    name : "Windstorm"
  };

  constructor() { }

  ngOnInit(): void {
  }


}
