import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMoviesDetailsComponent } from './e-movies-details.component';

describe('EMoviesDetailsComponent', () => {
  let component: EMoviesDetailsComponent;
  let fixture: ComponentFixture<EMoviesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMoviesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMoviesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
