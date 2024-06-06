import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LogEntryWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  source?: "Option1";
  timestamp?: DateTimeNullableFilter;
};
