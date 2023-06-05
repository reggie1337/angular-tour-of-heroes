import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Hero } from '../heroes/hero';
import { HeroService } from '../../services/hero.service';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  //search term introd into observable stream
  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      //will wait 300ms before considering the term
      debounceTime(300),

      //ignores new term if same as previous
      distinctUntilChanged(),
      //switch to new search observable when term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
