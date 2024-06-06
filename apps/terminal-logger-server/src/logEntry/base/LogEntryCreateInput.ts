/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum, IsDate } from "class-validator";
import { EnumLogEntrySource } from "./EnumLogEntrySource";
import { Type } from "class-transformer";

@InputType()
class LogEntryCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumLogEntrySource,
  })
  @IsEnum(EnumLogEntrySource)
  @IsOptional()
  @Field(() => EnumLogEntrySource, {
    nullable: true,
  })
  source?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;
}

export { LogEntryCreateInput as LogEntryCreateInput };
