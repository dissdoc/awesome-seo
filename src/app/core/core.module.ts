import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {CoreRoutingModule} from './core-routing.module';
import {SecondComponent} from '../second/second.component';
import {ThirdComponent} from '../third/third.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    SecondComponent,
    ThirdComponent
  ],
  exports: [
    RouterModule
  ]
})
export class CoreModule { }
