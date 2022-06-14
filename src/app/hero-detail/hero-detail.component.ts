import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
//now makes hero-detail ngIf statement work
  @Input() hero? : Hero;
  //injecting services into the constructor
  constructor(
    private route: ActivatedRoute,
    private heroService:HeroService,
    private location: Location ) { }
//lifecycle hook calls getHero method
  ngOnInit(): void {
    this.getHero();
  }
  //route parameters are always strings
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back();
  }

}
