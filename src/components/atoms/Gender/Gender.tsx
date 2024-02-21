/** This component is use for rendering an icon representing a person's gender.
 * If gender is true, it will render male icon with lighter black color,
 * otherwise it will render female icon with red color.
 * Usage:
 * <Gender gender={true|false} />
 */

import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import Colors from "../../../constants/Colors";
import FontSizes from "../../../constants/FontSizes";

interface GenderProps {
  gender: boolean;
  customFontSize?: string;
}

const Gender: React.FC<GenderProps> = ({ gender, customFontSize }) => (
  <div>
    {gender ? (
      <BsFillPersonFill
        style={{ color: Colors.LighterBlack, fontSize: customFontSize }}
      />
    ) : (
      <BsFillPersonFill style={{ color: Colors.Red }} />
    )}
  </div>
);

Gender.defaultProps = {
  customFontSize: FontSizes.MdLarger,
};

export default Gender;
