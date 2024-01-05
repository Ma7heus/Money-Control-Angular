import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'my-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.css']
})
export class ImportacaoComponent implements OnInit {
  title = 'IMPORTAÇÃO DE ARQUIVOS';
  dados: string[] = [];
  dataList: any[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  // Handle file change event
  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = () => {
      const fileContent: string = reader.result as string;
      const dataList = fileContent.split('\n');
      this.dados = dataList;
    };
    reader.readAsText(file);
  }

  onUpload() {
    this.openSnackBar('Upload Feito com Sucesso', 'Fechar');
  }

  showData(event: Event) {
    event.preventDefault();
    this.dataList = this.convertStringListToObjectList(this.dados);
  }

  consultarDados(key: string) {
    console.log(localStorage.getItem(key));
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  convertStringListToObjectList(stringList: string[]): any[] {
    const objectList: any[] = [];

    stringList.forEach((row) => {
      const fields = row.split(',');
      const obj = {
        data: fields[0],
        categoria: fields[1],
        descricao: fields[2],
        valor: fields[3]
      };
      objectList.push(obj);
    });

    return objectList;
  }
}
