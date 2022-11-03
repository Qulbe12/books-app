import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface ILayoutAsideLink {
  title: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'mat-layout-aside',
  templateUrl: './layout-aside.component.html',
  styleUrls: ['./layout-aside.component.scss'],
})
export class LayoutAsideComponent implements OnInit {
  @Input()
  links: ILayoutAsideLink[] = [];

  title: string = '';

  navigate(link: ILayoutAsideLink) {
    this.title = link.title;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.links.length > 0) {
      this.title = this.links[0].title;
    }
  }
}
