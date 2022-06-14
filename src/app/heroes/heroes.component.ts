import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero? : Hero;
//make heroes property a declalaration
  heroes : Hero [] = [];
//refactored hero property to be of type Hero
  hero: Hero = {
    id : 1,
    name : "Windstorm"
  };

  constructor(private heroService : HeroService, private messageService: MessageService) { }



  ngOnInit(): void {
    this.getHeroes();
  }

//method to get heroes from service
//asynchronus approach happens when requested not immediately
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


}
