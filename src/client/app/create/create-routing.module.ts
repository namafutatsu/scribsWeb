import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'create', component: CreateComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
