import { ICommandHandler } from "./interfaces/command-handler";
import { ICommandHandlerRegistry } from "./interfaces/command-handler-registry";
import { getCommandHandlerMetadata, getCommandMetadata } from "./meta";
import { Type } from "./utils/type";

export class CommandHandlerRegistry
  extends Map<string, Type<ICommandHandler>>
  implements ICommandHandlerRegistry<string>
{
  constructor(handlerClasses: Type<ICommandHandler>[] = []) {
    super();

    this.registerHandlers(handlerClasses);
  }

  getHandler(identifier: string) {
    return this.get(identifier);
  }

  allHandlers() {
    return Array.from(this.values());
  }

  registerHandlers(handlerClasses: Type<ICommandHandler>[]) {
    return handlerClasses.map((handlerClass) =>
      this.registerHandler(handlerClass)
    );
  }

  registerHandler(handlerClass: Type<ICommandHandler>) {
    const commandId = this.reflectCommandId(handlerClass);

    this.bind(handlerClass, commandId);

    return commandId;
  }

  private bind(handlerClass: Type<ICommandHandler>, commandId: string) {
    this.set(commandId, handlerClass);
  }

  private reflectCommandId(handlerClass: Type<ICommandHandler>) {
    const commandHandlerMetadata = getCommandHandlerMetadata(handlerClass);

    const commandMetadata = getCommandMetadata(
      commandHandlerMetadata.commandType
    );

    return commandMetadata.id;
  }
}
