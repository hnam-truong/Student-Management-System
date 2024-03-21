/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./TableHeader.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddReservingStudent from "../AddReservingStudent/AddReservingStudent";
import UpdateStudentStatus from "../UpdateStudentStatus/UpdateStudentStatus";
import { IStudent } from "../../../interfaces/student.interface";
import {
  AddButton,
  ExportButton,
  ImportButton,
} from "../../atoms/CustomButton/CustomButton";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import AddUser from "../AddUser/AddUser";
import InputExcelModal from "../../molecules/InputExcelModal/InputExcelModal";
import AddStudentsClass from "../AddStudentsClass/AddStudentsClass";
import UpdateStudentClassStatus from "../UpdateStudentClassStatus/UpdateStudentClassStatus";
import { IStudentClass } from "../../../interfaces/student-class.interface";

interface TableHeaderProps {
  title?: string;
  exportData?: () => void;
  importData?: () => void;
  handleDataChange?: () => void;
  showAddModal?: boolean;
  studentSelect?: IStudent[];
  studentClassSelect?: IStudentClass[];
  isUpdateStudentStatus?: boolean;
  isUpdateStudentClassStatus?: boolean;
  isSelectedStudent?: boolean;
  isExport?: boolean;
  isImport?: boolean;
  isSearch?: boolean;
  isHeaderBottom?: boolean;
  isAddStudent?: boolean;
  isAddUser?: boolean;
  isAddStudentClass?: boolean;
  isAddEmail?: boolean;
  excelUpload: (excelData: any) => void;
  href?: string;
  fileDownload?: string;
}

const TableHeader = ({
  title,
  exportData,
  importData,
  showAddModal,
  studentSelect,
  studentClassSelect,
  isUpdateStudentStatus,
  isUpdateStudentClassStatus,
  isSelectedStudent,
  isExport,
  isImport,
  isSearch,
  isHeaderBottom,
  isAddStudent,
  isAddUser,
  isAddStudentClass,
  isAddEmail,
  handleDataChange,
  excelUpload,
  href = "",
  fileDownload = "",
}: TableHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="edit-container">
      <div className="edit-container-list">{title}</div>
      {isHeaderBottom && (
        <div className="edit-container__content">
          <div className="edit-container__content__top">
            <div className="edit-button-search">
              {isSearch && <SearchInput />}
            </div>
            <div className="button-export-add">
              {isImport && importData && (
                <div>
                  <ImportButton onClick={showModal} text="Import" />
                  <InputExcelModal
                    excelUpload={excelUpload}
                    handleCancel={handleCancel}
                    isModalOpen={isModalOpen}
                    href={href}
                    fileDownload={fileDownload}
                  />
                </div>
              )}

              {isExport && exportData && (
                <div className="edit-container__content__top__btn--right">
                  <ExportButton onClick={exportData} text="Export" />
                </div>
              )}

              {showAddModal && (
                <div className="edit-container__content__top__btn--right">
                  <AddReservingStudent
                    id=""
                    handleDataChange={handleDataChange || (() => {})}
                    onAttendingStatusChange={() => {}}
                  />
                </div>
              )}
              {isAddStudent && (
                <div className="edit-container__content__top__btn--right">
                  <Link to="/student/add">
                    <AddButton text="Add new" />
                  </Link>
                </div>
              )}
              {isAddStudentClass && (
                <div className="edit-container__content__top__btn--right">
                  <AddStudentsClass />
                </div>
              )}
              {isAddUser && (
                <div className="edit-container__content__top__btn--right">
                  <AddUser handleDataChange={handleDataChange || (() => {})} />
                </div>
              )}
              {isAddEmail && (
                <div className="edit-container__content__top__btn--right">
                  <Link to="/email/add">
                    <AddButton text="Add new" />
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div>
            {isUpdateStudentStatus && (
              <div className="align-right">
                <UpdateStudentStatus
                  studentSelect={studentSelect || []}
                  isSelectedStudent={isSelectedStudent}
                />
              </div>
            )}
          </div>
          <div>
            {isUpdateStudentClassStatus && (
              <div className="align-right">
                <UpdateStudentClassStatus
                  studentSelect={studentClassSelect || []}
                  isSelectedStudent={isSelectedStudent}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

TableHeader.defaultProps = {
  showAddModal: false,
  title: "",
  exportData: () => {},
  importData: () => {},
  studentSelect: [],
  studentClassSelect: [],
  isUpdateStudentStatus: false,
  isUpdateStudentClassStatus: false,
  isSelectedStudent: false,
  isExport: true,
  isImport: true,
  isSearch: true,
  isHeaderBottom: true,
  isAddStudent: false,
  isAddStudentClass: false,
  isAddUser: false,
  isAddEmail: false,
  handleDataChange: () => {},
  excelUpload: () => {},
};

export default TableHeader;
