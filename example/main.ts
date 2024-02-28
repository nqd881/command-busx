import "reflect-metadata";
import { setupCommandBus } from "../src/setup";
import { CreateBookHandler, CreateUserHandler } from "./command-handlers";
import { CreateBookCommand, CreateUserCommand } from "./commands";

const commandBus = setupCommandBus([CreateUserHandler, CreateBookHandler]);

const createUser = async () => {
  const command = new CreateUserCommand("QuocDai");

  const result = await commandBus.execute(command);

  console.log(result);
};

const createBook = async () => {
  const command = new CreateBookCommand("DDD", "Domain driven design");

  const result = await commandBus.execute(command);

  console.log(result);
};

createUser();
createBook();
