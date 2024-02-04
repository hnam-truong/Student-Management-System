/** This is interface and type of Add Reserving */
import { Dayjs } from "dayjs";

export type FieldType = {
  ID: string;
  Class: string;
  ClassID: string;
  CurrentModules: string;
  ReservingReasonSelect: string;
  ReservingReasonTextArea: string;
  ReservingPeriod: [Dayjs | null, Dayjs | null];
  ReservingConditions: string[];
  ActivateReserving: boolean;
};

export type RangeValue = [Dayjs | null, Dayjs | null] | null;

export interface ReservingModalProps {
  id: string;
}
