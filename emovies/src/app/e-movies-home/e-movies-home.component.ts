import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-e-movies-home',
  templateUrl: './e-movies-home.component.html',
  styleUrls: ['./e-movies-home.component.scss'],
})
export class EMoviesHomeComponent {

  constructor(private router: Router) {

  }

  onContinue() {
    this.router.navigateByUrl('movies');
  }
}
