import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMoviesHeaderComponent } from './e-movies-header.component';

describe('EMoviesHeaderComponent', () => {
  let component: EMoviesHeaderComponent;
  let fixture: ComponentFixture<EMoviesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMoviesHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMoviesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
