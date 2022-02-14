import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child/child.component';
import { OtherComponent } from './other/other.component';
import { ParentRoutingModule } from './parent-routing.module';

@NgModule({
  imports: [CommonModule, ParentRoutingModule],
  declarations: [ParentComponent, ChildComponent, OtherComponent],
  exports: [ParentComponent, ChildComponent, OtherComponent],
})
export class ParentModule {}
