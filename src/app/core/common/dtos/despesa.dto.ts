import { AbstractDTO } from "./abstract.dto";

export class DespesaDto extends AbstractDTO {
  descricao!: string;
  valor!: number;
  data!: Date;
  categoria!: string;
}
