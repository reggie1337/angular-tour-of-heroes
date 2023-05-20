// import { Injectable } from '@angular/core';
// import { Hero } from './hero';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// //create the database of heros
// export class InMemoryDataService {
//   private heroesUrl = 'http://localhost:4200/heroes';

//   constructor(private http: HttpClient) {}
//   getHeroes(): Observable<{ heroes: Hero[] }> {
//     return this.http.get<{ heroes: Hero[] }>(this.heroesUrl);
//   }
//   genId(heroes: Hero[]): number {
//     return heroes.length > 0
//       ? Math.max(...heroes.map((hero) => hero.id)) + 1
//       : 11;
//   }
// }
