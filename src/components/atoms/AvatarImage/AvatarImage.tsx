import React from "react";
import { Space } from "antd";
import { IStudent } from "../../../interfaces/student.interface";
import Colors from "../../../constants/Colors";
import "../../../styles/main.scss";

const generateColor = (name: string): string => {
  const colors = [
    Colors.Yellow,
    Colors.Green,
    Colors.Blue,
    Colors.Orange,
    Colors.DarkGreen,
    Colors.Pink,
  ];
  const charCodeSum = name
    .split("")
    .reduce((sum: number, char: string) => sum + char.charCodeAt(0), 0);
  const index = charCodeSum % colors.length;
  return colors[index];
};

interface AvatarImageProps {
  studentDetail: IStudent;
  isImage: boolean;
}

const AvatarImage: React.FC<AvatarImageProps> = ({
  studentDetail,
  isImage,
}) => (
  <Space>
    {isImage && studentDetail?.ImageUrl ? (
      <img
        src={studentDetail.ImageUrl}
        alt={studentDetail?.Name}
        className="avatar-container"
        data-testid="avatar-image"
      />
    ) : (
      <div
        className="centered avatar-container"
        style={{ backgroundColor: generateColor(studentDetail?.Name) }}
      >
        {studentDetail?.Name && (
          <span className="avatar-initial">
            {studentDetail.Name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
    )}
  </Space>
);

export default AvatarImage;
