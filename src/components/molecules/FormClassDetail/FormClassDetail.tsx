import React from "react";
import ClassDetailInfo from "../../atoms/ClassDetailInfo/ClassDetailInfo";
import { IClass } from "../../../interfaces/class.interface";

interface FormClassDetailProps {
  classDetail: IClass;
}

const FormClassDetail: React.FC<FormClassDetailProps> = ({ classDetail }) => (
  <ClassDetailInfo classDetail={classDetail} />
);

export default FormClassDetail;
