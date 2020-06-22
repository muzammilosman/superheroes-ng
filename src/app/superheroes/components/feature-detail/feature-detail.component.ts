import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.css']
})
export class FeatureDetailComponent implements OnInit {

  @Input() featureTitle: any;
  @Input() featureDetails: any;
  expandFeature = false;

  constructor() { }

  ngOnInit() {
  }

  expandCollapse() {
    this.expandFeature = !this.expandFeature;
  }

}
