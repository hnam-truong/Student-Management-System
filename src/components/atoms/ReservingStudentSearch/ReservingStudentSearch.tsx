/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Form, Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import STUDENT_GENERAL from "../../../constants/StudentGeneral";

interface ReservingStudentSearchProps {
  fetchReservedStudentByID: (studentId: string) => void;
  id?: string;
}
const ReservingStudentSearch: React.FC<ReservingStudentSearchProps> = ({
  id,
  fetchReservedStudentByID,
}) => {
  const [isStudentIdEditable] = useState(id === "");
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = async (value, _e, _info) => {
    const studentId = value;

    // Await the fetchReservedStudentByID to complete before continuing
    fetchReservedStudentByID(studentId);
  };
  return (
    <>
      {STUDENT_GENERAL.map((group) => (
        <div className="form-group" key={group.key}>
          {group.children.map((item) => {
            const isStudentId = item.name === "ID";
            const isReadOnly = !isStudentIdEditable || !isStudentId;

            return (
              <Form.Item<IReservedStudent>
                label={item.label}
                name={item.name as keyof IReservedStudent}
                key={item.key}
                style={{ width: "48%" }}
                rules={
                  isReadOnly
                    ? []
                    : [
                        {
                          required: true,
                          message: "Please select student id.",
                        },
                      ]
                }
              >
                {isReadOnly ? (
                  <Input readOnly />
                ) : (
                  <Search
                    placeholder="Input Student ID"
                    allowClear
                    onSearch={onSearch}
                  />
                )}
              </Form.Item>
            );
          })}
        </div>
      ))}
    </>
  );
};

ReservingStudentSearch.defaultProps = {
  id: "",
};
export default ReservingStudentSearch;
