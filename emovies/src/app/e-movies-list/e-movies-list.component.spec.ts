import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMoviesListComponent } from './e-movies-list.component';

describe('EMoviesListComponent', () => {
  let component: EMoviesListComponent;
  let fixture: ComponentFixture<EMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMoviesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
