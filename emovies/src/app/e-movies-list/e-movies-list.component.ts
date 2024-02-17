import { Component, OnInit } from '@angular/core';
import { Movie } from '../e-movies/movie.model';
import { EMoviesService } from '../service/e-movies.service';

@Component({
  selector: 'app-e-movies-list',
  templateUrl: './e-movies-list.component.html',
  styleUrls: ['./e-movies-list.component.scss'],
})
export class EMoviesListComponent implements OnInit {
  moviesList!: Movie[];

  constructor(private service: EMoviesService) {}

  ngOnInit(): void {
    this.service.getMovies().subscribe((response) => {
      this.moviesList = response;
    });
  }
}
