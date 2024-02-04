import React from "react";
import '../StudentDetail.scss';
import { IStudent } from "../../../../Services/Interfaces & Types/Interfaces";

interface StudentDetailAcademicInfoProps {
    studentDetail: IStudent;
}

const StudentDetailAcademicInfo: React.FC<StudentDetailAcademicInfoProps> = ({ studentDetail }) => {
    return (
        <div className="academic-info-container">
            {/* Academic Information content */}
            <div className="info-container">
                <div className="info-container-1">
                    <div className="column-1">
                        <div className="info-item"><strong>University</strong></div>
                        <div className="info-item"><strong>Major</strong></div>
                        <div className="info-item"><strong>RECer</strong></div>
                        <div className="info-item"><strong>GPA</strong></div>
                    </div>
                    <div className="column-2">
                        <div className="info-item">{studentDetail.University}</div>
                        <div className="info-item">{studentDetail.Major}</div>
                        <div className="info-item">{studentDetail.RECer}</div>
                        <div className="info-item">{studentDetail.GPA}</div>
                    </div>
                </div>
                <div className="info-container-2">
                    <div className="column-3">
                        <div className="info-item"><strong>Graduation Time</strong></div>
                        <div className="info-item"><strong>Class Code</strong></div>
                        <div className="info-item"><strong>Class Start Date</strong></div>
                    </div>
                    <div className="column-4">
                        <div className="info-item">{new Date(studentDetail.GraduationTime).toLocaleDateString()}</div>
                        <div className="info-item">{studentDetail.ClassCode}</div>
                        <div className="info-item">{new Date(studentDetail.ClassStartDate).toLocaleDateString()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetailAcademicInfo;
