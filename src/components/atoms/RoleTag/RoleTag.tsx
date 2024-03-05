/** This component is designed to display a role tag based on a string type value.
 * It supports 2 states: "Admin", "Trainer".
 * Additionally, it allows customization of width through the optional prop 'customWidth'.
 * Usage:
 * <RoleTag type="Admin|Trainer" customWidth="2000px" />
 */

import React from "react";
import FontWeights from "../../../constants/FontWeight";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import SizesResponsive from "../../../constants/SizesResponsive";

interface RoleProps {
  type: string;
  customWidth?: string; // Prop for custom width
}

const RoleTag: React.FC<RoleProps> = ({ type, customWidth }) => {
  let backgroundColor: string | undefined;
  let content: string;
  let fontWeight: number;
  let textColor: string;

  switch (type) {
    case "Admin":
      backgroundColor = Colors.LimeGreen;
      content = "Admin";
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      break;
    default:
      backgroundColor = Colors.Third;
      content = "Trainer";
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      break;
  }

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor,
    color: textColor,
    fontWeight,
    borderRadius: Sizes.Medium,
    width: customWidth, // Use customWidth if provided, otherwise use MdLarge
    height: Sizes.XsLarge,
    border: "1px solid",
  };

  return <div style={style}>{content}</div>;
};

RoleTag.defaultProps = {
  customWidth: SizesResponsive.LgLarger, // Default value for customWidth if not provided
};

export default RoleTag;
