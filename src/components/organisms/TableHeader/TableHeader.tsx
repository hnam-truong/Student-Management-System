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

interface TableHeaderProps {
  title?: string;
  exportData?: () => void;
  importData?: () => void;
  handleDataChange?: () => void;
  showAddModal?: boolean;
  studentSelect?: IStudent[];
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
}

const TableHeader = ({
  title,
  exportData,
  importData,
  showAddModal,
  studentSelect,
  isUpdateStudentStatus,
  isUpdateStudentClassStatus,
  isSelectedStudent,
  isExport,
  isImport,
  isSearch,
  isHeaderBottom,
  isAddStudent,
  isAddUser,
  handleDataChange,
  isAddStudentClass,
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
            {isSearch && <SearchInput />}

            <div className="button-export-add">
              {isImport && importData && (
                <div>
                  <ImportButton onClick={showModal} text="Import" />
                  <InputExcelModal
                    handleCancel={handleCancel}
                    isModalOpen={isModalOpen}
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
                  studentSelect={studentSelect || []}
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
  handleDataChange: () => {},
};

export default TableHeader;
