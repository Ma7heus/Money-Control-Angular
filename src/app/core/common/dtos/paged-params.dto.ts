export class PagedParamsDTO {
	value!: string;
	attributes!: string[];
	restriction!: string;
	orderBy!: string;
	orderByAtributes!: string[];
	pageSize!: number;
	pageNumber!: number;

	constructor() {
		this.pageSize = 10;
		this.pageNumber = 1;
		this.orderBy = 'ASC';
		this.restriction = 'CONTAIN';
	}
}
