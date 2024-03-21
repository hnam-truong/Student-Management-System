import React, { useEffect } from "react";
import { Empty } from "antd";
import { useReservedStudentSingleStore } from "../../../store/ReservedStudentStore";
import ReservingInformation from "../../atoms/ReservingInformation/ReservingInformation";
import useReservingCondition from "../../../store/ReservingConditionStore";

interface ReservingInformationProps {
  studentDetailID: string;
}
const StudentReservingInformation: React.FC<ReservingInformationProps> = ({
  studentDetailID,
}) => {
  const { aReservedStudent, loading, fetchReservedStudentByID } =
    useReservedStudentSingleStore();
  const { fetchReservingCondition, reservingCondition } =
    useReservingCondition();

  useEffect(() => {
    fetchReservedStudentByID(studentDetailID); // get reserved information by student id
    fetchReservingCondition();
  }, [fetchReservedStudentByID, studentDetailID, fetchReservingCondition]);
  loading && console.log(aReservedStudent);
  const chooseCondition = aReservedStudent?.Conditions;

  return loading && !aReservedStudent ? (
    <Empty description="There is no reserving for this attendee" />
  ) : (
    <div>
      <ReservingInformation
        chooseCondition={chooseCondition ?? []}
        data={aReservedStudent || null}
        reservingCondition={reservingCondition}
      />
    </div>
  );
};

export default StudentReservingInformation;
