import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TerminalService } from "./terminal.service";
import { TerminalControllerBase } from "./base/terminal.controller.base";

@swagger.ApiTags("terminals")
@common.Controller("terminals")
export class TerminalController extends TerminalControllerBase {
  constructor(protected readonly service: TerminalService) {
    super(service);
  }
}
