import { Form } from "antd";
import React from "react";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import ReservingCondition from "../ReservingCondition/ReservingCondition";
import { IReservingCondition } from "../../../interfaces/reserving-condition.interface";
import "./ReservingInformation.scss";

interface ReservingInformationProps {
  data: IReservedStudent | null;
  chooseCondition: string[] | [];
  reservingCondition: IReservingCondition[] | null;
}

const ReservingInformation: React.FC<ReservingInformationProps> = ({
  data,
  chooseCondition,
  reservingCondition,
}) => (
  <div className="reserving-content">
    <div className="reserving-content-first-row">
      <div className="reserving-content-first-row-left">
        <div className="item-title">Period</div>
        <div>
          {data?.ReservedStartDate?.toString().substring(0, 10)}
          <strong>{" -> "}</strong>
          {data?.ReservedEndDate?.toString().substring(0, 10)}
        </div>
      </div>
      <div className="reserving-content-first-row-right">
        <div className="item-title">Reason</div>
        <div>{data?.Reason}</div>
      </div>
    </div>
    <div className="reserving-info">
      <div className="item-title">Conditions</div>
      <div className="reserving-info-content">
        <Form
          initialValues={{
            ReservingConditions: chooseCondition,
          }}
        >
          <ReservingCondition reservingCondition={reservingCondition} disable />
        </Form>
      </div>
    </div>
  </div>
);

export default ReservingInformation;
