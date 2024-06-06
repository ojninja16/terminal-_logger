import { Module } from "@nestjs/common";
import { TerminalModuleBase } from "./base/terminal.module.base";
import { TerminalService } from "./terminal.service";
import { TerminalController } from "./terminal.controller";
import { TerminalResolver } from "./terminal.resolver";

@Module({
  imports: [TerminalModuleBase],
  controllers: [TerminalController],
  providers: [TerminalService, TerminalResolver],
  exports: [TerminalService],
})
export class TerminalModule {}
