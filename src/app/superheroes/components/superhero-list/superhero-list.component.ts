import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../common/http.service';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {

  superheroes: [];
  searched: string;
  searchResults: [];
  pages =  [1 , 2 , 3];
  offset = 0;
  searchKey = '';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
   this.getSuperHeroes();
  }

  nextPages() {
    this.pages.forEach((page, i) => {
      this.pages[i] = page + 3;
    });
    this.adjustOffset(this.pages[0] - 1);
  }

  previousPages() {
    this.pages.forEach((page, i) => {
      this.pages[i] = page - 3;
    });
    this.adjustOffset(this.pages[this.pages.length - 1]);
  }

  adjustOffset(pageNo) {
    this.offset = pageNo * 100;
    this.getSuperHeroes();
  }

  getSuperHeroes() {
    this.httpService.getSuperheoes(this.offset).subscribe((res: any) => {
      this.superheroes = res.results;
      this.offset = res.results.offset;
    });
  }

  searchSuperHeroes() {
    this.httpService.searchSuperHeroes(this.searchKey).subscribe((res: any) => {
      this.superheroes = res.results;
    });
  }

}
