import { ExtratoServiceService } from './../../core/common/services/extrato-service.service';
import { ImportacaoService } from './../../core/common/services/importacao.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { McDialogComponent } from 'src/app/core/common/components/mc-dialog/mc-dialog.component';
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

  verTransacoes(_t107: any) {
    throw new Error('Method not implemented.');
    }
    deletarExtrato(_t107: any) {
    throw new Error('Method not implemented.');
    }

}
