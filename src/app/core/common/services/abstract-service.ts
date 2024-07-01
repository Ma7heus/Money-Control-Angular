
export abstract class AbstractService {

  protected baseUrl: string = 'https://money-control-api-node.vercel.app/';

  constructor(url: string) {
    this.baseUrl = this.getBaseUrl() + url;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  getById(id: number): string {
    return `${this.baseUrl}/${id}`;
  }

  getAll(): string {
    return this.baseUrl;
  }

}
