import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {

  @Input() dados!: any[]; // Use the non-null assertion operator "!"

  dataSource: MatTableDataSource<any>;
  colunas: string[] = ['id', 'nome', 'descricao', 'preco', 'acoes'];

  constructor() {
    this.dataSource = new MatTableDataSource(this.dados);
  }

  // Método para editar um item
  editarItem(item: any) {
    // Implemente a lógica para editar o item aqui
    alert('Editar item:' + item);
  }

  // Método para excluir um item
  excluirItem(item: any) {
    // Implemente a lógica para excluir o item aqui
    alert('Excluir item:' + item);
  }

}
