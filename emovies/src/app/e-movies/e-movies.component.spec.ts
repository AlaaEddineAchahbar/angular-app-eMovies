import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMoviesComponent } from './e-movies.component';

describe('EMoviesComponent', () => {
  let component: EMoviesComponent;
  let fixture: ComponentFixture<EMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
