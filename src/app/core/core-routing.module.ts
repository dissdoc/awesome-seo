import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecondComponent} from '../second/second.component';
import {ThirdComponent} from '../third/third.component';


const routes: Routes = [
  { path: '', redirectTo: 'second', pathMatch: 'full' },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule { }
