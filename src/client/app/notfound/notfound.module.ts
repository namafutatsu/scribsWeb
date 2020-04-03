import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './notfound.component';
import { NotFoundRoutingModule } from './notfound-routing.module';

@NgModule({
  imports: [CommonModule, NotFoundRoutingModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
