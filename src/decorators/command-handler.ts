import "reflect-metadata";
import { ICommand } from "../interfaces/command";
import { ICommandHandler } from "../interfaces/command-handler";
import { defineCommandMetadata } from "../meta/command";
import { defineCommandHandlerMetadata } from "../meta/command-handler";
import { Type } from "../utils/type";

export const CommandHandler = <T extends ICommand>(command: Type<T>) => {
  return (target: Type<ICommandHandler<T>>) => {
    defineCommandMetadata(command);

    defineCommandHandlerMetadata(target, command);
  };
};
