import { Type } from "../utils/type";
import { ICommand } from "./command";

export interface CommandHandlerMetadata {
  commandType: Type<ICommand>;
}
