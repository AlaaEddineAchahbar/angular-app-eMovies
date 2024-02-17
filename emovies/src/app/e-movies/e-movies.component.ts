import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-movies',
  templateUrl: './e-movies.component.html',
  styleUrls: ['./e-movies.component.scss'],
})
export class EMoviesComponent implements OnInit {

  /**
   * Constants
   */
  maxRating: number = 10;

  /**
   * Global Variabls
   */
  @Input() movie!: Movie;
  stars: number[];
  currentRating!: number;

  constructor(private router: Router) {
    this.stars = Array(this.maxRating)
      .fill(0)
      .map((x, i) => i + 1);
  }

  ngOnInit(): void {}

  // rate(rating: number): void {
  //   this.currentRating =
  //     (this.movie.rating * this.movie.votes + rating) / (this.movie.votes + 1);
  //   this.movie.rating = Number(this.currentRating.toFixed(1));
  // }

  onViewMovie() {
    this.router.navigateByUrl(`movies/${this.movie.id}`);
  }

}
