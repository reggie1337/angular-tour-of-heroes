import { Injectable } from '@angular/core';
import { HEROES } from "./mock-heros";
import {Hero} from "./hero";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //returns Observable of array of mock heroes
  getHeroes():Observable< Hero []>{
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  //find requires predicate
  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id ===id)!;
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of (hero);
  }
  constructor(private messageService: MessageService) { }
}

