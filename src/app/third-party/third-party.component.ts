import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { init } from './../store/actions';

@Component({
  selector: 'app-third-party',
  templateUrl: './third-party.component.html',
  styleUrls: ['./third-party.component.css'],
})
export class ThirdPartyComponent implements OnInit {
  constructor(private store$: Store) {}

  ngOnInit() {
    this.store$.dispatch(init);
  }
}
