/** This component is use for rendering an icon representing a person's gender.
 * If gender is true, it will render male icon with lighter black color,
 * otherwise it will render female icon with red color.
 * Usage:
 * <Gender gender={true|false} />
 */

import React from "react";
import { IoWomanSharp, IoManSharp } from "react-icons/io5";
import Colors from "../../../constants/Colors";
import FontSizes from "../../../constants/FontSizes";

interface GenderProps {
  gender: boolean;
  customFontSize?: string;
}

const Gender: React.FC<GenderProps> = ({ gender, customFontSize }) => (
  <div>
    {(gender !== undefined || gender !== null) && gender ? (
      <IoManSharp
        data-testid="male-icon"
        style={{
          color: Colors.LighterBlack,
          width: "100%",
          alignItems: "center",
          fontSize: customFontSize,
        }}
      />
    ) : (
      <IoWomanSharp
        data-testid="female-icon"
        style={{
          color: Colors.Red,
          width: "100%",
          alignItems: "center",
          fontSize: customFontSize,
        }}
      />
    )}
  </div>
);

Gender.defaultProps = {
  customFontSize: FontSizes.XsLarger,
};

export default Gender;
