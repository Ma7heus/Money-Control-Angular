import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  listaMeses = ['JAN','FEV','MAR','ABR','MAI','JUN','JAN','JUL','AGO','SET','OUT','NOV','DEZ'];

  listaCategorias = [1,2,3,4];
}
