import { v4 } from "uuid";
import { CommandHandler } from "../src/decorators/command-handler";
import { ICommandHandler } from "../src/interfaces/command-handler";
import { CreateBookCommand, CreateUserCommand } from "./commands";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  async handle(command: CreateUserCommand): Promise<any> {
    const { name } = command;

    const newUser = {
      id: v4(),
      name,
    };

    return newUser;
  }
}

@CommandHandler(CreateBookCommand)
export class CreateBookHandler implements ICommandHandler<CreateBookCommand> {
  async handle(command: CreateBookCommand): Promise<any> {
    const { title, description } = command;

    const newBook = {
      id: v4(),
      title,
      description,
    };

    return newBook;
  }
}
