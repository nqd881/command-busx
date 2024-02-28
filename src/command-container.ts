import { Container, decorate, injectable } from "inversify";
import { ICommandHandler } from "./interfaces/command-handler";
import { ICommandHandlerContainer } from "./interfaces/command-handler-container";
import { Type } from "./utils/type";

export class CommandHandlerContainer implements ICommandHandlerContainer {
  private _container: Container;

  constructor(handlerClasses: Type<ICommandHandler>[]) {
    this._container = new Container();

    this.setupContainer(handlerClasses);
  }

  private setupContainer(handlerClasses: Type<ICommandHandler>[]) {
    handlerClasses.forEach((handlerClass) =>
      decorate(injectable(), handlerClass)
    );

    handlerClasses.forEach((handlerClass) => {
      this._container.bind(handlerClass).toSelf();
    });
  }

  getHandlerInstance<T extends ICommandHandler>(
    handlerClass: Type<T>
  ): T | undefined {
    return this._container.get(handlerClass);
  }
}
