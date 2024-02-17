import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMoviesService } from '../service/e-movies.service';
import { Movie } from '../e-movies/movie.model';

@Component({
  selector: 'app-e-movies-details',
  templateUrl: './e-movies-details.component.html',
  styleUrls: ['./e-movies-details.component.scss']
})
export class EMoviesDetailsComponent implements OnInit {
  movie!: Movie;

  constructor(private route: ActivatedRoute, private service: EMoviesService) {
  }

  ngOnInit(): void {
    const movieId: number = this.route.snapshot.params['id'];
    this.service.getMovieByID(movieId).subscribe(movie => {
      this.movie = movie;
      // if (movie) {
      //   this.movie = movie;
      // } else {
      //   throw new Error("Movie Not Found!");
      // }  
    });
  }

}
