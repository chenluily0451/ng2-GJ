import { Injectable } from '@angular/core';

import { Hero } from '../class/hero';

import {HEROES} from './mock-temp';

@Injectable()

export class tempService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
