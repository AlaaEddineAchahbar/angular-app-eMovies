import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMoviesRatingComponent } from './e-movies-rating.component';

describe('EMoviesRatingComponent', () => {
  let component: EMoviesRatingComponent;
  let fixture: ComponentFixture<EMoviesRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMoviesRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMoviesRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
