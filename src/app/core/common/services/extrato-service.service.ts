import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service';
import { ExtratoDTO } from '../dtos/extrato.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExtratoServiceService extends AbstractService<ExtratoDTO> {

  constructor(http: HttpClient) {
    super(http, 'extrato');
  }

}
