import React from "react";
import "./DetailGeneralInfo.scss";

interface StudentDetailGeneralInfoProps {
  infos: Array<{
    key: string;
    children: Array<{
      key: string;
      children: Array<{
        key: string;
        name: string | React.ReactElement | number;
      }>;
    }>;
  }>;
}

const DetailGeneralInfo: React.FC<StudentDetailGeneralInfoProps> = ({
  infos,
}) => (
  <div data-testid="general-info-content" className="student-detail-container">
    {/* General Information content */}
    <div className="info-container">
      {infos?.map((info) => (
        <div key={info.key} className={`info-container-${info.key}`}>
          {info.children.map((child) => (
            <div key={child.key} className={`column-${child.key}`}>
              {child.children.map((item) => (
                <div key={item.key} className="info-item">
                  {item.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default DetailGeneralInfo;
