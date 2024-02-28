import { Type } from "../utils/type";
import { ICommandHandler } from "./command-handler";

export interface ICommandHandlerContainer {
  getHandlerInstance<T extends ICommandHandler>(
    handlerClass: Type<T>
  ): T | undefined;
}
