import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//create the database of heros
export class InMemoryDataService implements InMemoryDbService {
  private heroesUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}
  createDb(): Observable<{ heroes: Hero[] }> {
    return this.http.get<{ heroes: Hero[] }>(this.heroesUrl);
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
