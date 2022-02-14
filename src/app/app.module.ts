import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ThirdPartyComponent } from './third-party/third-party.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    ThirdPartyComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
