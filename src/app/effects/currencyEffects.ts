import { CurrenciesUpdatedAction } from './../actions/currency';
import { CurrencyService } from './../services/currency.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import * as currency from '../actions/currency';

// import 'rxjs/add/operator/map';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class CurrencyEffects {
    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(currency.CURRENCIESUPDATE).pipe(
        switchMap(() =>
            this.currencyService
                .getRates().pipe(
                map(data => new CurrenciesUpdatedAction(data)))
        ));

    constructor(
        private currencyService: CurrencyService,
        private actions$: Actions
    ) {}
}