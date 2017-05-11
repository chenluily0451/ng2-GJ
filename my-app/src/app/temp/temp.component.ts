import { Component, OnInit } from '@angular/core';
import {Hero} from '../class/hero';
import { tempService } from './temp.service';

// heroes: Hero[];

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss'],
  providers: [tempService]
})

export class TempComponent implements OnInit{
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private tempService: tempService) { }

  onSelect(hero){
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    // this.getHeroes();
    this.getHeroesSlowly();
  }

  // getHeroes(): void {
  //   this.tempService.getHeroes().then(
  //     heroes => this.heroes = heroes
  //   );
  // }

  getHeroesSlowly(){
    this.tempService.getHeroesSlowly().then(
      heroes => this.heroes = heroes
    );
  }
}
