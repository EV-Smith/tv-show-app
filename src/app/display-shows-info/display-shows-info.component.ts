import { Component, OnInit, Input } from '@angular/core';
import { IDisplayShows } from '../idisplay-shows';
import { DisplayShowsService } from '../display-shows.service';

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './display-shows-info.component.html',
  styleUrls: ['./display-shows-info.component.css']
})
export class DisplayShowsInfoComponent implements OnInit {
  @Input() current: IDisplayShows
  constructor(private displayShowsService: DisplayShowsService) { 

  }
    
  ngOnInit() {}

}
