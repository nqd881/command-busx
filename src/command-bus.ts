import { ICommand } from "./interfaces/command";
import { ICommandBus } from "./interfaces/command-bus";
import { ICommandHandlerContainer } from "./interfaces/command-handler-container";
import { ICommandHandlerRegistry } from "./interfaces/command-handler-registry";
import { getCommandMetadata } from "./meta";

export class CommandBus<CommandBase extends ICommand = ICommand>
  implements ICommandBus<CommandBase>
{
  private _container: ICommandHandlerContainer;
  private _registry: ICommandHandlerRegistry;

  constructor(
    container: ICommandHandlerContainer,
    registry: ICommandHandlerRegistry
  ) {
    this._container = container;
    this._registry = registry;
  }

  execute<T extends CommandBase, R = any>(command: T): Promise<R> {
    const commandId = this.getCommandId(command);

    const handlerClass = this._registry.getHandler(commandId);

    if (!handlerClass) throw new Error();

    const handler = this._container.getHandlerInstance(handlerClass);

    if (!handler) throw new Error();

    return handler.handle(command);
  }

  private getCommandId<T extends CommandBase>(command: T) {
    const commandMetadata = getCommandMetadata(
      Object.getPrototypeOf(command).constructor
    );

    return commandMetadata.id;
  }
}
