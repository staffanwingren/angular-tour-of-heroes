import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(h => this.hero = h);
  }

  getBack(): void {
    this.location.back();
  }
}
