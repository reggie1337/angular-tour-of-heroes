import { Injectable } from '@angular/core';
import { HEROES } from "./mock-heros";
import {Hero} from "./hero";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //returns Observable of array of mock heroes
  getHeroes():Observable< Hero []>{
    const heroes = of(HEROES)
    return heroes;
  }
  constructor() { }
}

