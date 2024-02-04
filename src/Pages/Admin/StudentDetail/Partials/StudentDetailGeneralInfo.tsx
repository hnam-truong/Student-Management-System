import React from "react";
import '../StudentDetail.scss';
import { IStudent } from "../../../../Services/Interfaces & Types/Interfaces";

interface StudentDetailGeneralInfoProps {
    studentDetail: IStudent;
}

const StudentDetailGeneralInfo: React.FC<StudentDetailGeneralInfoProps> = ({ studentDetail }) => {
    return (
        <div className="student-detail-container">
            {/* General Information content */}
            <div className="info-container">
                <div className="info-container-1">
                    <div className="column-1">
                        <div className="info-item"><strong>Phone </strong></div>
                        <div className="info-item"><strong>Email</strong></div>
                        <div className="info-item"><strong>Gender</strong></div>
                        <div className="info-item"><strong>Date of Birth </strong></div>
                    </div>
                    <div className="column-2">
                        <div className="info-item">{studentDetail.Phone}</div>
                        <div className="info-item">{studentDetail.Email}</div>
                        <div className="info-item">
                            {studentDetail.Gender === false && "Female"}
                            {studentDetail.Gender === true && "Male"}
                            {studentDetail.Gender === null && "-"}
                        </div>
                        <div className="info-item">{new Date(studentDetail.DateOfBirth).toLocaleDateString()}</div>
                    </div>
                </div>
                <div className="info-container-2">
                    <div className="column-3">
                        <div className="info-item"><strong>Permanent Residence </strong></div>
                        <div className="info-item"><strong>Location </strong></div>
                        <div className="info-item"><strong>Status </strong></div>
                    </div>
                    <div className="column-4">
                        <div className="info-item">{studentDetail.PermanentResidence}</div>
                        <div className="info-item">{studentDetail.Location}</div>
                        <div className="info-item">{studentDetail.Status}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetailGeneralInfo;
