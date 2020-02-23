import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DisplayShowsService } from '../display-shows.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();

  search = new FormControl('', [Validators.minLength(1)]);
  constructor(private displayShowsService: DisplayShowsService) { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string) => {
      if (!this.search.invalid && searchValue){

        this.searchEvent.emit(searchValue);
        
      }
    })
  }
}
