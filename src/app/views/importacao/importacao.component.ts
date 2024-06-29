import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { McDialogComponent } from 'src/app/core/common/components/mc-dialog/mc-dialog.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'my-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.css'],
})
export class ImportacaoComponent implements OnInit, AfterViewInit {
  title = 'Arquivos e Extratos';
  dados: string[] = [];
  dataList: any[] = [];

  dataSource = [];
  displayedColumns: string[] = ['id', 'progress', 'name', 'fruit'];

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

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
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  openDialogNovoArquivo() {
    this.dialog.open(McDialogComponent, {
      disableClose: true,
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
