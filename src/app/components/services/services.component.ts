import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: any[] = [
    {
      class: 'fa-solid fa-code',
      title: 'Responsive Web Design',
      body: 'Responsive web design ensures that a website looks and functions well on various devices and screen sizes, from desktops to tablets to smartphones'
    },
    {
      class: 'fa-brands fa-app-store',
      title: 'Single Page Application',
      body: 'Developing single-page applications (SPAs) provides users with a fluid and fast browsing experience by loading a single HTML page and dynamically updating content as the user interacts with the app.'
    },
    {
      class: 'fa-solid fa-crop',
      title: 'UI/UX Design',
      body: 'Create visually appealing and user-friendly interfaces by designing and prototyping UI/UX elements, ensuring an intuitive and engaging user experience.'
    }
  ]
}
