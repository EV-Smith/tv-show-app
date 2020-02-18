import { Component, OnInit } from '@angular/core';
import { ITvShowData } from '../itv-show-data';
import { TvShowInfoService } from '../tv-show-info.service';

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './tv-show-info.component.html',
  styleUrls: ['./tv-show-info.component.css']
})
export class TvShowInfoComponent implements OnInit {
  current: ITvShowData
  constructor(private tvShowInfoService: TvShowInfoService) { 

  }
    
  ngOnInit() {
    this.tvShowInfoService.getTVShow('the-good-place').subscribe(data => this.current = data)
  }

}
