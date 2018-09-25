import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';


const routes: Routes = [
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: 'second', pathMatch: 'full' },
  { path: 'third', component: ThirdComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
