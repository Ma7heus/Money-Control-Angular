import { AbstractDTO } from "./abstract.dto";
import { TransacaoDTO } from "./Transacao.dto";

export class ExtratoDTO extends AbstractDTO {
  idextrato!: number;
  idExtrato!: number;
  dataCriacao!: string;
  instituicao!: string;
  transacaos!: TransacaoDTO[];

  constructor() {
    super();
    this.dataCriacao = new Date().toISOString();
    this.transacaos = [];
  }
}
