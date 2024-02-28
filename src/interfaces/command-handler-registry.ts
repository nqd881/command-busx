import { Type } from "../utils/type";
import { ICommandHandler } from "./command-handler";

export interface ICommandHandlerRegistry<Identifier = unknown> {
  getHandler(identifier: Identifier): Type<ICommandHandler> | undefined;

  allHandlers(): Type<ICommandHandler>[];

  registerHandler(handlerClass: Type<ICommandHandler>): Identifier;
}
