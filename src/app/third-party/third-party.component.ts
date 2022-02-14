import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-party',
  templateUrl: './third-party.component.html',
  styleUrls: ['./third-party.component.css'],
})
export class ThirdPartyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate([{ outlets: { routerToChild: ['child'] } }]);
  }
}
