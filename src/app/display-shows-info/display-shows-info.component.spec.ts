import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShowsInfoComponent } from './display-shows-info.component';

describe('TvShowInfoComponent', () => {
  let component: DisplayShowsInfoComponent;
  let fixture: ComponentFixture<DisplayShowsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayShowsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShowsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
