import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent {

  dataset1 = [
    { id: 1, nome: 'Item 1', descricao: 'Descrição do Item 1', preco: 10 },
    { id: 2, nome: 'Item 2', descricao: 'Descrição do Item 2', preco: 20 },
  ];

  dataset2 = [
    { id: 101, nome: 'Product A', descricao: 'Description of Product A', preco: 50 },
    { id: 102, nome: 'Product B', descricao: 'Description of Product B', preco: 30 },
    // Add more data as needed
  ];


  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataset1.filter = filterValue.trim().toLowerCase();

  //   if (this.dataset1.paginator) {
  //     this.dataset1.paginator.firstPage();
  //   }
  // }
}

