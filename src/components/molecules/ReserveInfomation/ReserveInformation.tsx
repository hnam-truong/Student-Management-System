import { useEffect, useState } from "react";
import { Form, Modal, Spin } from "antd";
import "./ReserveInformation.scss";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import useReservingCondition from "../../../store/ReservingConditionStore";
import ReservingCondition from "../../atoms/ReservingCondition/ReservingCondition";
import ClassDetailHeader from "../ClassDetailHeader/ClassDetailHeader";
import { useClassStore, useSingleClassStore } from "../../../store/ClassStore";
import ClassDetailInfoModal from "../../atoms/ClassDetailInfoModal/ClassDetailInfoModal";
import { useSingleScoreStore } from "../../../store/ScoreStore";
import FeeTable from "../../atoms/FeeTable/FeeTable";
import MockTable from "../../atoms/MockTable/MockTable";
import { IClass } from "../../../interfaces/class.interface";

type ReserveInformationProps = {
  data: IReservedStudent;
};
const ReserveInformation = ({ data }: ReserveInformationProps) => {
  const { fetchReservingCondition, reservingCondition } =
    useReservingCondition();
  const { getClassByID, aClass } = useSingleClassStore();
  const { getClassesByName, classes } = useClassStore();
  const { aScore, getStudentScoreByID } = useSingleScoreStore();

  useEffect(() => {
    getClassByID(data?.ClassID);
    fetchReservingCondition();
    getClassesByName("Opening");
    getStudentScoreByID("1");
  }, [
    fetchReservingCondition,
    data?.ClassID,
    getClassByID,
    getClassesByName,
    getStudentScoreByID,
    data?.ID,
  ]);
  const [choosedClass, setChoosedClass] = useState<IClass>();
  const [open, setOpen] = useState<boolean>(false);
  const chooseCondition = data?.Conditions;
  const loading = !aClass || !reservingCondition || !classes || !aScore;
  return (
    <div className="root-reserve-modal">
      {loading ? <Spin /> : <ClassDetailHeader classDetail={aClass} />}
      <hr className="divider-hr" />
      <div className="reserving modal-content-custom">
        {loading && <Spin />}
        <div className="reserving-score">
          <div className="reserving-title">Student Score</div>
          <div className="reserving-score-header">
            <div className="item-title">Current module:</div>
            <div>HTML</div>
          </div>
          <div className="reserving-score-table">
            {aScore && (
              <>
                <div>
                  <div className="reserving-title">FEE</div>
                  <FeeTable studentScore={aScore} />
                </div>
                <div>
                  <div className="reserving-title">MOCK</div>
                  <MockTable studentScore={aScore} />
                </div>
              </>
            )}
          </div>
        </div>
        <hr className="divider-hr" />
        <div className="reserving-title">Reserving informations</div>
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
              <div>{data.Reason}</div>
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
                <ReservingCondition
                  reservingCondition={reservingCondition}
                  disable
                />
              </Form>
            </div>
          </div>
          <hr className="divider-hr" />
          <div className="reserving-content-classes">
            <div className="reserving-title">Re-class posibilities</div>
            <div className="reserving-content-classes-info">
              {classes && classes?.length > 0
                ? classes.map((classItem) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                    <div
                      key={classItem.ClassID}
                      onClick={() => {
                        setChoosedClass(classItem);
                        setOpen(true);
                      }}
                    >
                      <ClassDetailInfoModal
                        classDetail={classItem}
                        key={classItem.ClassID}
                      />
                    </div>
                  ))
                : "No class on Opening"}
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        // onOk={handleOk}
        title={<div className="modal-reserve-title centered">classss</div>}
      >
        {choosedClass?.ClassName}
      </Modal>
    </div>
  );
};

export default ReserveInformation;
