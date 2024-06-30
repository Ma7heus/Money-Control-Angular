import { AbstractDTO } from "./abstract.dto";
import { InstituicaoBancariaDTO } from "./instituicao-bancaria.dto";

export class ArquivoDTO extends AbstractDTO {
  nome!: string;
  dataImportacao!: Date;
  instituicao!: InstituicaoBancariaDTO;
}
