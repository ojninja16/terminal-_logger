/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TerminalWhereInput } from "./TerminalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TerminalOrderByInput } from "./TerminalOrderByInput";

@ArgsType()
class TerminalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TerminalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TerminalWhereInput, { nullable: true })
  @Type(() => TerminalWhereInput)
  where?: TerminalWhereInput;

  @ApiProperty({
    required: false,
    type: [TerminalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TerminalOrderByInput], { nullable: true })
  @Type(() => TerminalOrderByInput)
  orderBy?: Array<TerminalOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TerminalFindManyArgs as TerminalFindManyArgs };
