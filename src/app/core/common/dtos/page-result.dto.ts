export class PagedResultDTO<T> {
	elements!: Array<T>;
	pageSize!: number;
	pageNumber!: number;
	totalPages!: number;
	totalElements!: number;
}
