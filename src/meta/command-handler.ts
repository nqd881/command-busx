import { ICommand } from "../interfaces/command";
import { ICommandHandler } from "../interfaces/command-handler";
import { CommandHandlerMetadata } from "../interfaces/command-handler-metadata";
import { Type } from "../utils/type";
import { COMMAND_HANDLER_METADATA } from "./constants";

export const defineCommandHandlerMetadata = (
  target: Type<ICommandHandler>,
  commandType: Type<ICommand>
) => {
  Reflect.defineMetadata(COMMAND_HANDLER_METADATA, { commandType }, target);
};

export const getCommandHandlerMetadata = (
  target: Type<ICommandHandler>
): CommandHandlerMetadata => {
  const metadata = Reflect.getMetadata(COMMAND_HANDLER_METADATA, target);

  if (!metadata) throw new Error();

  return metadata;
};
