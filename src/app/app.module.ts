import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThirdPartyComponent } from './third-party/third-party.component';
import { StoreModule } from '@ngrx/store/src';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from 'src/store/effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([AppEffects]),
  ],
  declarations: [AppComponent, ThirdPartyComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
