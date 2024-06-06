import * as graphql from "@nestjs/graphql";
import { TerminalResolverBase } from "./base/terminal.resolver.base";
import { Terminal } from "./base/Terminal";
import { TerminalService } from "./terminal.service";

@graphql.Resolver(() => Terminal)
export class TerminalResolver extends TerminalResolverBase {
  constructor(protected readonly service: TerminalService) {
    super(service);
  }
}
