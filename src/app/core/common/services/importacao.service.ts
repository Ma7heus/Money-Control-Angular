import { AbstractDTO } from './../dtos/abstract.dto';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImportacaoService extends AbstractService<AbstractDTO> {

  constructor(http: HttpClient) {
    super(http, 'transaco');
  }
}
