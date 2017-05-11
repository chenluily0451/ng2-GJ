import { Component,Input} from '@angular/core';
import {Hero} from '../class/hero'

@Component({
  selector: 'app-temp-detail',
  templateUrl: './temp-detail.component.html',
  styleUrls: ['./temp-detail.component.scss']
})
export class TempDetailComponent{
  @Input() hero1: Hero;
}
