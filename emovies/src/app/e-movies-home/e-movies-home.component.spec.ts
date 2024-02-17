import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMoviesHomeComponent } from './e-movies-home.component';

describe('EMoviesHomeComponent', () => {
  let component: EMoviesHomeComponent;
  let fixture: ComponentFixture<EMoviesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMoviesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMoviesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
