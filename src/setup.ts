import { CommandBus } from "./command-bus";
import { CommandHandlerContainer } from "./command-container";
import { CommandHandlerRegistry } from "./command-handler-registry";
import { ICommandHandler } from "./interfaces/command-handler";
import { Type } from "./utils/type";

export const setupCommandBus = (handlerClasses: Type<ICommandHandler>[]) => {
  const registry = new CommandHandlerRegistry(handlerClasses);

  const container = new CommandHandlerContainer(registry.allHandlers());

  const commandBus = new CommandBus(container, registry);

  return commandBus;
};
