import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMoviesListComponent } from './e-movies-list/e-movies-list.component';
import { EMoviesHomeComponent } from './e-movies-home/e-movies-home.component';
import { EMoviesDetailsComponent } from './e-movies-details/e-movies-details.component';

const routes: Routes = [
    { path: 'movies/:id', component: EMoviesDetailsComponent },
    { path: 'movies', component: EMoviesListComponent },
    { path: '', component: EMoviesHomeComponent }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
