import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  tabMenu: any[] = [true, false, false]
  activeTab: number = 0
  skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Wordpress', percentage: 95},
    { name: 'Angular', percentage: 75},
    {name:'bootstrap', percentage:85},
  ];

  tab(n: number) {
    for (let i = 0; i < 3; i++) {
      this.tabMenu[i] = false;
    }
    this.tabMenu[n] = true;
    this.activeTab = n;
  }
}