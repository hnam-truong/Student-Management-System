import React from "react";
import { Space } from "antd";
import { IStudent } from "../../../interfaces/student.interface";
import Colors from "../../../constants/Colors";
import "../../../styles/main.scss";
import { IUser } from "../../../interfaces/user.interface";

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
  detail: IStudent | IUser | null;
  isImage: boolean;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ detail, isImage }) => (
  <Space>
    {isImage && detail?.ImageUrl !== "" && detail?.ImageUrl ? (
      <img
        src={detail.ImageUrl}
        alt={detail?.Name}
        className="avatar-container"
        data-testid="avatar-image"
      />
    ) : (
      <div
        className="centered avatar-container"
        style={{ backgroundColor: generateColor(detail?.Name || "") }}
      >
        {detail?.Name && (
          <span className="avatar-initial">
            {detail.Name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
    )}
  </Space>
);

export default AvatarImage;
