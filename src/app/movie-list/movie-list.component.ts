import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchBarComponent, CommonModule, MovieDetailComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchTerm: string = '';
  selectedMovieId: number | null = null;

  constructor(private movieService: MovieService,private router : Router) {}

  ngOnInit(): void {
    /*this.movieService.getMovieList().subscribe((data) => {
      this.movies = data;
      this.filteredMovies = data;
    });*/
    this.movies = this.movieService.getMovieList();
    this.filteredMovies = this.movies
  }

  onSearch(title: string): void {
    this.searchTerm = title;
    this.filteredMovies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  selectMovie(movieId: number): void {
    this.router.navigate(['/movie', movieId]);
  }

}
