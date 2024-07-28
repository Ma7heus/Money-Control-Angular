import { AbstractDTO } from "./abstract.dto";

export class UserDTO extends AbstractDTO {
	login?: string;
	password?: string;
	admin?: boolean;
}
