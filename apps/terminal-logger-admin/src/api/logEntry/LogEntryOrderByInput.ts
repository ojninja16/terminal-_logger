import { SortOrder } from "../../util/SortOrder";

export type LogEntryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  source?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
