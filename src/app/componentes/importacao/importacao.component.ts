import { Component, OnInit } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'my-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.css']
})
export class ImportacaoComponent implements OnInit {

  title = 'IMPORTAÇÃO DE ARQUIVOS';
  dados: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = (e) => {
      const fileContent: string = reader.result as string;
      var dataList = fileContent.split('\n')
      this.dados = dataList;
    };
    reader.readAsText(file);
  }

  onUpload() {
    console.log('upload');
    localStorage.setItem('dados', JSON.stringify(this.dados));
    console.log(localStorage.getItem('dados'));
  }
   


}