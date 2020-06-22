import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SuperheroListComponent } from './components/superhero-list/superhero-list.component';
import { SuperheroDetailComponent } from './components/superhero-detail/superhero-detail.component';
import { FeatureDetailComponent } from './components/feature-detail/feature-detail.component';

@NgModule({
  declarations: [SuperheroListComponent, SuperheroDetailComponent, FeatureDetailComponent],
  imports: [
    CommonModule,
    SuperheroesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuperheroesModule { }
