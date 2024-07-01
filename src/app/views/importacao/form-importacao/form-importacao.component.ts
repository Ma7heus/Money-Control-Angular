import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { InstituicaoBancariaDTO } from 'src/app/core/common/dtos/instituicao-bancaria.dto';
import { ImportacaoService } from 'src/app/core/common/services/importacao.service';

@Component({
  selector: 'app-form-importacao',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule
  ],
  templateUrl: './form-importacao.component.html',
  styleUrl: './form-importacao.component.css'
})
export class FormImportacaoComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  intituicoes: InstituicaoBancariaDTO[] = [
    {id: 1, nome: "NuBank"},
    {id: 2, nome: "Inter"},
    {id: 3, nome: "PayPal"},
    {id: 4, nome: "Avenue"},
    {id: 5, nome: "Sicoob"},
    {id: 6, nome: "Rico"},
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ImportacaoService
  ) { }

  goList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onFileSelected(event: any) {

  }

}
