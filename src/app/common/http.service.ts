import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // tslint:disable-next-line:max-line-length
  baseURL =  'https://comicvine.gamespot.com/api/characters?format=json&api_key=48fc96418a89adee75c43fca1ecf792fc509db6e&field_list=name,id,real_name,deck,image,api_detail_url';
  // tslint:disable-next-line:max-line-length
  searchURL = 'https://comicvine.gamespot.com/api/search?format=json&api_key=48fc96418a89adee75c43fca1ecf792fc509db6e&field_list=name,id,real_name,deck,image,api_detail_url';
  apiKey = '48fc96418a89adee75c43fca1ecf792fc509db6e';

  constructor(private http: HttpClient) { }

  getSuperheoes(offset) {
    return this.http.get(`${this.baseURL}&offset=${offset}`).pipe(
      map((response: any) => response),
      catchError((error: any) => error)
    );
  }

  getSuperHeroDetails(url) {
    return this.http.get(`${url}?api_key=${this.apiKey}&format=json`).pipe(
      map((response: any) => response),
      catchError((error: any) => error)
      );
  }

  searchSuperHeroes(search) {
    return this.http.get(`${this.searchURL}&query=${search}`).pipe(
      map((response: any) => response),
      catchError((error: any) => error)
    );
  }
}
