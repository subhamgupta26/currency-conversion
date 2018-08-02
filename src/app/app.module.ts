import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { CurrencyService } from './services/currency.service';
import { CurrencyEffects } from './effects/currencyEffects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot(reducers), FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CurrencyEffects])
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
