import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AbstractDTO } from "../dtos/abstract.dto";
import { PagedParamsDTO } from "../dtos/paged-params.dto";
import { PagedResultDTO } from "../dtos/page-result.dto";
import { environment } from "../../../../../environments/environment";

const urlApi = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T extends AbstractDTO> {

  protected baseUrl?: string = urlApi;

  constructor(
    protected http: HttpClient,
    @Inject('url') protected url: string
  ) { }

  getItems(): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}${this.url}`);
  }

  getPaged(params: PagedParamsDTO): Observable<PagedResultDTO<T>> {
    return this.http.post<PagedResultDTO<T>>(`${this.baseUrl}${this.url}/paged`, params)
    };

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${this.url}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${this.url}`, item);
  }

  update(id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${this.url}/${id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${this.url}/${id}`);
  }

  protected getUrl(): string {
    return this.baseUrl + this.url;
  }

  protected getBaseUrl(): string {
    return this.baseUrl || '';
  }

}
