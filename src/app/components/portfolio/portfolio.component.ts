import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioTiles = [
    {
      image: '../../../assets/Tiles Images/weatherapp.jpeg',
      title: 'Weather App',
      body: 'Your reliable and intuitive weather app providing real-time updates, forecasts',
      link: 'https://weather-tawny-tau.vercel.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/ecom.jpg',
      title: 'Ecommerce App',
      body: ' Your ultimate online shopping destination offering a wide range of products',
      link: 'https://brand-weld.vercel.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/temp.jpeg',
      title: 'Temperature converter App',
      body: 'Quickly and easily convert temperatures between Celsius, Fahrenheit, and Kelvin',
      link: 'https://temp3-kwtn.vercel.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/Dic.jpeg',
      title: 'Dictionary App',
      body: 'Your go-to dictionary app for instant definitions, synonyms, and pronunciation.',
      link: 'https://vercel.com/yousafnazirs-projects/dictionary-zt4y',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/tic.jpeg',
      title: 'Tic Tac Toe Game',
      body: 'Enjoy a classic game of Tic Tac Toe with smooth gameplay ',
      link: 'https://tik-tac-toe-six.vercel.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/snake.jpeg',
      title: 'Snake Game',
      body: 'Experience endless fun with a classic Snake game',
      link: 'https://snake-one-tau.vercel.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/olx.jpeg',
      title: 'OLX Clown',
      body: 'Cloned olx website ',
      link: 'https://olx-clown.vercel.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/rock.jpeg',
      title: 'Rock Paper Game',
      body: 'Play Rock Paper sciccor game with computer and count your score',
      link: 'https://rock-paper-5e49.vercel.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/todo.jpeg',
      title: 'Todo List App',
      body: 'Write your daily things in this list',
      link: 'https://java-lake.vercel.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/dashboard.jpeg',
      title: 'Dashboard Web',
      body: 'Dashboard for company',
      link: 'https://creative-brown.vercel.app/',
      class: 'all work js'
    },
    {
      image: '../../../assets/Tiles Images/quote.jpeg',
      title: 'Quote genetor',
      body: 'Read Random Quotes You May Like',
      link: 'https://quote-flame.vercel.app/',
      class: 'all work js'
    },
  ];
  
}
