import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(arr => this.heroes = arr);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`Clicked hero ${hero.name}`);
  }
}
