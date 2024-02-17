import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EMoviesComponent } from './e-movies/e-movies.component';
import { FormsModule } from '@angular/forms';
import { EMoviesListComponent } from './e-movies-list/e-movies-list.component';
import { EMoviesHeaderComponent } from './e-movies-header/e-movies-header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { EMoviesHomeComponent } from './e-movies-home/e-movies-home.component';
import { EMoviesDetailsComponent } from './e-movies-details/e-movies-details.component';
import { EMoviesRatingComponent } from './e-movies-rating/e-movies-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    EMoviesComponent,
    EMoviesListComponent,
    EMoviesHeaderComponent,
    EMoviesHomeComponent,
    EMoviesDetailsComponent,
    EMoviesRatingComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
