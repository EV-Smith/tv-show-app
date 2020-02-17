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
      image: 'http://static.tvmaze.com/uploads/images/original_untouched/207/519371.jpg',
      name: 'The Good Place',
      language: 'Enlgish',
      genres: 'Comedy, Fantasy, Supernatural',
      runtime: 30,
      premiered: '2016-09-19',
      status: 'Ended',
      summary: 'The Good Place is a smart, unique comedy about what makes a good person. The show follows Eleanor Shellstrop, an ordinary woman who enters the afterlife and, thanks to some kind of error, is sent to the Good Place instead of the Bad Place, which is definitely where she belongs. While hiding in plain sight from Michael, the wise architect of the Good Place (who doesn\'t know he\'s made a mistake), she\'s determined to shed her old way of living and discover the awesome (or, at least, the pretty good) person within.'
    } as ITvShowInfo
  }
    
  ngOnInit(): void {
  }

}
