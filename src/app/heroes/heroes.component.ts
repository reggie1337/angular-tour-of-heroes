import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
//exposed heroes array for binding
  heroes = HEROES;
//refactored hero property to be of type Hero
  hero: Hero = {
    id : 1,
    name : "Windstorm"
  };

  constructor() { }

  //add Click event handler define selected hero
  selectedHero? : Hero;
  // selectedHero is now defined in the method as hero
  onSelect (hero: Hero){
    this.selectedHero = hero
  }

  ngOnInit(): void {
  }


}
