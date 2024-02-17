import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-e-movies-rating',
  templateUrl: './e-movies-rating.component.html',
  styleUrls: ['./e-movies-rating.component.scss']
})
export class EMoviesRatingComponent {
  @Input() maxRating: number = 10;
  @Input() currentRating: number = 0;
  @Input() ratings: number = 0;
  stars: number[];

  constructor() {
    this.stars = Array(this.maxRating).fill(0).map((x, i) => i + 1);
  }

  rate(myRating: number): void {
    this.currentRating = Number((((this.currentRating * this.ratings) + myRating) / (this.ratings + 1)).toFixed(1));  
  }
}
