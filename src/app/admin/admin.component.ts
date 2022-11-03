import { Component, OnInit } from '@angular/core';
import { ILayoutAsideLink } from '../mat-extension/layout-aside/layout-aside.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  links: ILayoutAsideLink[] = [
    {
      title: 'Facilities',
      icon: 'circle',
      path: '/facilities'
    }
    ,
    {
      title: 'Memory',
        icon: 'memory',
      path: '/memory',
    },
    {
      title: 'Looks',
      icon: 'looks',
      path: '/looks',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
