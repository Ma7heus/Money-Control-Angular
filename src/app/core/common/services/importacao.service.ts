import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ImportacaoService extends AbstractService {

  constructor() {
    const url = 'importacao';
    super(url);
  }
}
