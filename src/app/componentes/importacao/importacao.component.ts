import { Component, OnInit } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'my-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.css']
})
export class ImportacaoComponent implements OnInit {

  title = 'IMPORTAÇÃO DE ARQUIVOS';
  dados = '';

  constructor() {}

  ngOnInit() {
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    const reader: FileReader = new FileReader();

    reader.onloadend = (e) => {
      const fileContent: string = reader.result as string;
      console.log(fileContent);
      this.dados = fileContent;

    };

    reader.readAsText(file);
  }
  

}