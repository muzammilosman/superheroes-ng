import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../common/http.service';

@Component({
  selector: 'app-superhero-detail',
  templateUrl: './superhero-detail.component.html',
  styleUrls: ['./superhero-detail.component.css']
})
export class SuperheroDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  superHeroDetail: any;
  heroFetched: boolean;

  ngOnInit() {
    this.fetchHero();
  }

  fetchHero() {
    this.heroFetched = true;
    this.route.queryParams.subscribe(params => {
      this.httpService.getSuperHeroDetails(params.detail).subscribe((res) => {
        this.heroFetched = false;
        this.superHeroDetail = res.results;
      });
    });
  }

}
