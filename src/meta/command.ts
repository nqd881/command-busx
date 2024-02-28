import { v4 } from "uuid";
import { ICommand } from "../interfaces/command";
import { Type } from "../utils/type";
import { COMMAND_METADATA } from "./constants";
import { CommandMetadata } from "../interfaces/command-metadata";

export const defineCommandMetadata = (target: Type<ICommand>) => {
  if (!Reflect.hasOwnMetadata(COMMAND_METADATA, target)) {
    Reflect.defineMetadata(COMMAND_METADATA, { id: v4() }, target);
  }
};

export const getCommandMetadata = (target: Type<ICommand>): CommandMetadata => {
  const metadata = Reflect.getMetadata(COMMAND_METADATA, target);

  if (!metadata) throw new Error();

  return metadata;
};
