export interface UtilityReading {
  period_start: string;
  period_end: string | null;
  previous_reading: number | null;
  current_reading: number | null;
  usage_value: number | null;
  status: boolean;
}
