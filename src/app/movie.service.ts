import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  //getMovieList, getMovieById et getMovieByTitle.
  // je n'ai pas trouvé le fichier movie.json 
  getMovieList():Movie[]{
    return [];
  }
  getMovieById(idMovie : number): Movie | null{
    return null
  }
  getMovieByTitle(title : string):Movie| null{
    return null;
  }

}
