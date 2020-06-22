import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroListComponent } from './components/superhero-list/superhero-list.component'
import { SuperheroDetailComponent } from './components/superhero-detail/superhero-detail.component'


const routes: Routes = [
  {
    path: '',
    children: [
        {path: '', component: SuperheroListComponent},
        {path: 'hero-detail', component: SuperheroDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperheroesRoutingModule { }
