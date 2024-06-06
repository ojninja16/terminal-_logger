export type LogEntry = {
  createdAt: Date;
  id: string;
  message: string | null;
  source?: "Option1" | null;
  timestamp: Date | null;
  updatedAt: Date;
};
