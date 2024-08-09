import { CommonModule } from '@angular/common';
import { ExtratoServiceService } from './../../core/common/services/extrato-service.service';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ArquivoDTO } from 'src/app/core/common/dtos/arquivo.dto';
import { ExtratoDTO } from 'src/app/core/common/dtos/extrato.dto';
import { InstituicaoBancariaDTO } from 'src/app/core/common/dtos/instituicao-bancaria.dto';
import { AlertService } from 'src/app/core/common/services/alert.service';
import { GenericListingComponent } from 'src/app/core/common/components/generic-listing/generic-listing.component';
import { ColumnDTO } from 'src/app/core/common/dtos/column.dto';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TransacaoDTO } from 'src/app/core/common/dtos/Transacao.dto';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

export interface DespesaDTO {
  id?: number;
  data: string;
  categoria: string;
  descricao: string;
  valor: Number;
}

@Component({
  selector: 'my-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.css'],
})
export class ImportacaoComponent implements OnInit {

  readonly dialogTransacoes = inject(MatDialog);

  title = 'Importação de Extratos Bancarios';
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  dataList: any[] = [];

  dataSource = new MatTableDataSource<ExtratoDTO>();
  displayedColumns: string[] = ['idExtrato', 'instituicao', 'dataCriacao', 'acoes'];

  fileDto: ArquivoDTO = new ArquivoDTO();
  dadosArquivoExtraidos!: DespesaDTO[];

  intituicoes: InstituicaoBancariaDTO[] = [
    { id: 1, nome: "NuBank" },
    { id: 2, nome: "Inter" },
    { id: 3, nome: "PayPal" },
    { id: 4, nome: "Avenue" },
    { id: 5, nome: "Sicoob" },
    { id: 6, nome: "Rico" },
  ];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private alert: AlertService,
    private extratoService: ExtratoServiceService,
  ) {
    this.getExtratos();
  }

  ngOnInit() {
    //this.getExtratos();
  }

  getExtratos() {
    this.extratoService.getItems().subscribe({
      next: (data) => {
        console.log(data);

        this.dataSource = new MatTableDataSource(data);
      },
      error: (error) => {
        this.alert.showError('Erro ao buscar extratos' + error.message);
      }
    });
  }

  // Handle file change event
  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file.type !== 'text/csv') {
      this.alert.showError('Arquivo Inválido, precisa ser tipo CSV');
      return;
    }
    const reader: FileReader = new FileReader();
    this.fileDto.nome = file.name;
    this.fileDto.dataImportacao = new Date();

    reader.onloadend = () => {
      const fileContent: string = reader.result as string;
      const dataList = fileContent.split('\n');
      const data = this.convertStringListToObjectList(dataList);
      this.dadosArquivoExtraidos = data;

      console.log(data);

    };
    reader.readAsText(file);
  }

  uploadArquivo() {
    if (!this.dadosArquivoExtraidos) {
      this.alert.showError('Nenhum arquivo selecionado');
      return;
    }
    console.log(this.dadosArquivoExtraidos);

    // this.extratoService.getAll().subscribe((data) => {
    //   console.log(data);
    // });



    this.alert.showSuccess('Upload Feito com Sucesso');
  }

  convertStringListToObjectList(stringList: string[]): any[] {
    const objectList: any[] = [];

    stringList.forEach((row) => {
      const fields = row.split(',');
      const linha: DespesaDTO = {
        data: fields[0],
        categoria: fields[1],
        descricao: fields[2],
        valor: new Number(fields[3]),
      };

      objectList.push(linha);
    });

    return objectList;
  }

  verTransacoes(extrato: ExtratoDTO) {
    console.log("EXtrato: ", extrato);


    this.dialogTransacoes.open(DialogElementsExampleDialog,
      {
        data: extrato,
        width: '100%',

      });
  }

  deletarExtrato(_t107: any) {
    throw new Error('Method not implemented.');
  }

}


@Component({
  selector: 'dialog-transacoes',
  templateUrl: './dialog-transacoes.html',
  styleUrls: ['./dialog-transacoes.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    GenericListingComponent,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogElementsExampleDialog implements OnInit {
  dialog = inject(MatDialogRef<DialogElementsExampleDialog>);

  data = inject<ExtratoDTO>(MAT_DIALOG_DATA);
  displayedColumns: string[] = ['descricao', 'categoria', 'datatransacao', 'valor'];
  dataSource = new MatTableDataSource<TransacaoDTO>();

  columns: ColumnDTO[] = [
    { property: 'data', label: 'Data',type: 'text' },
  ];

  ngOnInit() {
    console.log("Data: ", this.data);
    this.dataSource = new MatTableDataSource(this.data.transacaos);
  }

  closeDialog() {
    this.dialog.close();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
