import { Component, OnInit } from '@angular/core';
import { ITvShowInfo } from '../itv-show-info';

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './tv-show-info.component.html',
  styleUrls: ['./tv-show-info.component.css']
})
export class TvShowInfoComponent implements OnInit {
  current: ITvShowInfo
  constructor() { 
    this.current = {
      name: 'The Good Place',
      summary: 'The Good Place is a smart, unique comedy about what makes a good person.',
      image: ''
    } as ITvShowInfo
  }
    
  ngOnInit(): void {
  }

}
