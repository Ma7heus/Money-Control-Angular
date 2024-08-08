import { CommonModule } from '@angular/common';
import { ExtratoServiceService } from './../../core/common/services/extrato-service.service';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ArquivoDTO } from 'src/app/core/common/dtos/arquivo.dto';
import { ExtratoDTO } from 'src/app/core/common/dtos/extrato.dto';
import { InstituicaoBancariaDTO } from 'src/app/core/common/dtos/instituicao-bancaria.dto';
import { AlertService } from 'src/app/core/common/services/alert.service';

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
        width: '500px',
        height: '500px',
      });
  }

  deletarExtrato(_t107: any) {
    throw new Error('Method not implemented.');
  }

}


@Component({
  selector: 'dialog-transacoes',
  templateUrl: './dialog-transacoes.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogElementsExampleDialog {

  data = inject<any>(MAT_DIALOG_DATA);

  constructor() {
    console.log("Dialog", this);
  }

  closeDialog() {
    this.closeDialog();
  }
}
