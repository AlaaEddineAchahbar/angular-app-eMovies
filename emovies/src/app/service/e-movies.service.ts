import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../e-movies/movie.model';

@Injectable({
  providedIn: 'root',
})
export class EMoviesService {

  EMOVIES_URL: string = `http://localhost:3000/movies`;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.EMOVIES_URL);
  }

  getMovieByID(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.EMOVIES_URL + `/${id}`);
  }
}
