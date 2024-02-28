export class CreateUserCommand {
  constructor(public name: string) {}
}

export class CreateBookCommand {
  constructor(public title: string, public description: string) {}
}
