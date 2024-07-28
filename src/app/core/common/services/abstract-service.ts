import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export abstract class AbstractService {

  //protected baseUrl: string = 'https://money-control-api-node.vercel.app/';
  protected baseUrl: string = 'http://localhost:3000/';
  protected http: HttpClient;

  constructor(url: string) {
    this.baseUrl = this.getBaseUrl() + url;
    this.http = http;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  getById(id: number): string {
    return `${this.baseUrl}/${id}`;
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  update(id: number, data: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, data);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
