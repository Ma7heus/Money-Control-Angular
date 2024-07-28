import { AbstractDTO } from "./abstract.dto";

export class ExtratoDTO extends AbstractDTO {
  idextrato!: number;
  datacriacao!: string;
  instituicao!: string;
}
