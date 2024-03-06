/** This component is designed to display a status tag based on a string type value.
 * It supports 2 states: "active", "Inactive", "draft".
 * Additionally, it allows customization of width through the optional prop 'customWidth'.
 * Usage:
 * <AvailableTag type="active|Inactive|draft" customWidth="2000px" />
 */

import React from "react";
import FontWeights from "../../../constants/FontWeight";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import SizesResponsive from "../../../constants/SizesResponsive";

interface StatusProps {
  status: string;
  customWidth?: string; // Prop for custom width
}

const AvailableTag: React.FC<StatusProps> = ({ status, customWidth }) => {
  let backgroundColor: string | undefined;
  let content: string;
  let fontWeight: number;
  let textColor: string;

  switch (status) {
    case "Active":
      backgroundColor = Colors.Green;
      content = "Active";
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;
    case "Inactive":
      backgroundColor = Colors.Fourth;
      content = "Inactive";
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;
    default:
      backgroundColor = Colors.SlateGray;
      content = "Disable";
      fontWeight = FontWeights.Normal;
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

AvailableTag.defaultProps = {
  customWidth: SizesResponsive.LgLarger, // Default value for customWidth if not provided
};

export default AvailableTag;
