import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  movie: Movie | null | undefined;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtenir l'ID depuis la route
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    if (movieId) {
      this.movie = this.movieService.getMovieById(movieId);
    }
  }
}
