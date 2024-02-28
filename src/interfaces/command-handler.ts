import { ICommand } from "./command";

export interface ICommandHandler<T extends ICommand = ICommand, R = any> {
  handle(command: T): Promise<R>;
}
