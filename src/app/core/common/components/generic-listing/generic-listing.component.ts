import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractDTO } from '../../dtos/abstract.dto';
import { AbstractService } from '../../services/abstract-service';
import { MatPaginator, MatPaginatorModule, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { FilterDTO } from '../../dtos/filter.dto';
import { ColumnDTO } from '../../dtos/column.dto';
import { ActionsDTO } from '../../dtos/actions.dto';
import { FieldDTO } from '../../dtos/field.dto';
import { PagedParamsDTO } from '../../dtos/paged-params.dto';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-generic-listing',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './generic-listing.component.html',
  styleUrl: './generic-listing.component.css'
})
export class GenericListingComponent implements OnInit {

  @Input() path!: string;
	@Input() service!: AbstractService<AbstractDTO>;
	@Input() filters!: FilterDTO[];
	@Input() listingBy: string = 'id';
	@Input() orderBy: string = 'desc';
	@Input() columns!: ColumnDTO[];
	@Input() actions!: ActionsDTO[];

	@ViewChild(MatPaginator)
	paginator!: MatPaginator;

	@ViewChild(MatSort)
	sort!: MatSort;

	dataSource!: MatTableDataSource<AbstractDTO>;
	displayedColumns: string[] = [];
	field: FieldDTO[] = [];
	acoes: ActionsDTO[] = [];

	isListing!: boolean;
	isFormulario!: boolean;
	lastSearch: string = '';
	totalElements: number = 0;

	constructor(
		private _router: Router,
		private _alertService: AlertService,
	) { }

	ngOnInit(): void {
		this.columns.forEach((item) => {
			this.displayedColumns.push(item.property);
		});
		this.displayedColumns.push('acoes');

		this.dataSource = new MatTableDataSource<AbstractDTO>();
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.findAll(new PagedParamsDTO());
	}

	findAll(params: PagedParamsDTO): void {
		this.service.getPaged(params).subscribe((data) => {
			if (params.pageNumber === 1) {
				this.paginator.firstPage();
			}
			this.dataSource.data = data.elements;
			this.totalElements = data.totalElements;
		});
	}

	applyFilter(event: Event) {
		this.lastSearch = (event.target as HTMLInputElement).value;

		const params = new PagedParamsDTO();
		params.pageSize = this.paginator.pageSize;
		params.pageNumber = 1;

		params.value = this.lastSearch;
		params.attributes = this.displayedColumns.slice(0, this.displayedColumns.length - 1);

		if (this.sort.direction !== '') {
			params.orderBy = this.sort.direction.toUpperCase();
			params.orderByAtributes = [this.sort.active];
		}

		this.findAll(params);
	}

	public goForm(id: number) {
		this._router.navigate(['/', this.path, id]);
	}

	public confirmDelete(id: number) {
		this.service.delete(id).subscribe({
			next: () => {
				this.findAll(new PagedParamsDTO());
				this._alertService.showSuccess('Registro excluído com sucesso!');
			},
			error: (e) => {
				this._alertService.showError('Erro ao excluir o registro: ' + e.error.mensagem);
			}
		});
	}

	pageChange(pageEvent: PageEvent) {
		const params = new PagedParamsDTO();
		params.pageSize = pageEvent.pageSize;
		params.pageNumber = pageEvent.pageIndex + 1;

		params.value = this.lastSearch;
		params.attributes = this.displayedColumns.slice(0, this.displayedColumns.length - 1);

		if (this.sort.direction !== '') {
			params.orderBy = this.sort.direction.toUpperCase();
			params.orderByAtributes = [this.sort.active];
		}

		this.findAll(params);
	}

	sortChange(sortEvent: any) { // recebe any mas deveria ser Sort
		const params = new PagedParamsDTO();
		params.pageSize = this.paginator.pageSize;
		params.pageNumber = this.paginator.pageIndex + 1;

		params.value = this.lastSearch;
		params.attributes = this.displayedColumns.slice(0, this.displayedColumns.length - 1);

		if (sortEvent.direction !== '') {
			params.orderBy = sortEvent.direction.toUpperCase();
			params.orderByAtributes = [sortEvent.active];
		}

		this.findAll(params);
	}

}
