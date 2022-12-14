import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(arr => this.heroes = arr);
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero(name).subscribe(h => this.heroes.push(h));
  }

  deleteHero(hero: Hero): void {
    if (!hero) {return;}
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
