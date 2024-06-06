import { LogEntry as TLogEntry } from "../api/logEntry/LogEntry";

export const LOGENTRY_TITLE_FIELD = "message";

export const LogEntryTitle = (record: TLogEntry): string => {
  return record.message?.toString() || String(record.id);
};
