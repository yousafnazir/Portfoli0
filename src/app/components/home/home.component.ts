import { Component } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngAfterViewInit() {
    const typed = new Typed('.multiple-text', {
      strings: ["Fronted Developer", "Software Engineer", "Wordpress Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });
  }
}
