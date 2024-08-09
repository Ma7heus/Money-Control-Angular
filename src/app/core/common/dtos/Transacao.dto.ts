import { AbstractDTO } from "./abstract.dto";

export class TransacaoDTO extends AbstractDTO {

    idtransacao!: number;
    datatransacao!: string;
    descricao!: string;
    categoria!: string;
    valor!: number;
    idExtrato!: string;

}
