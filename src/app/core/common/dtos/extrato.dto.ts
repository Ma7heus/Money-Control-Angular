import { AbstractDTO } from "./abstract.dto";
import { TransacaoDTO } from "./Transacao.dto";

export class ExtratoDTO extends AbstractDTO {
  idextrato!: number;
  idExtrato!: number;
  datacriacao!: string;
  dataCriacao!: string;
  instituicao!: string;
  transacaos!: TransacaoDTO[];
}
