/** This function component is response for map array of first four form items include student id
 * class name, class id and current modules
 */
import React, { useState } from "react";
import { Form, Input } from "antd";
import { formItems } from "./FormItems";
import type { SearchProps } from "antd/es/input/Search";
import { IReservedStudent } from "../../../../Services/Interfaces & Types/Interfaces";
interface ReservingStudentDetailProps {
  id: string;
  fetchReservedStudentByID: (studentId: string) => void;
}
const ReservingStudentDetail: React.FC<ReservingStudentDetailProps> = ({
  id,
  fetchReservedStudentByID,
}) => {
  const [isStudentIdEditable] = useState(id === "");
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = async (value, e: any, info) => {
    const studentId = value;

    // Await the fetchReservedStudentByID to complete before continuing
    await fetchReservedStudentByID(studentId);
  };
  return (
    <>
      {formItems.map((group, i) => (
        <div className="form-group" key={i}>
          {group.map((item, i) => (
            <Form.Item<IReservedStudent>
              label={item.label}
              name={item.name as keyof IReservedStudent}
              key={i}
              style={{ width: "48%" }}
            >
              {item.name === "ID" ? (
                !isStudentIdEditable ? (
                  <Input readOnly />
                ) : (
                  <Search
                    placeholder="Input Student ID"
                    allowClear
                    onSearch={onSearch}
                  />
                )
              ) : (
                <Input readOnly />
              )}
            </Form.Item>
          ))}
        </div>
      ))}
    </>
  );
};

export default ReservingStudentDetail;
