/** This component is designed to display a status tag of student based on a string type value.
 * It supports 2 states: "Reserve", "Drop out", "Finish".
 * Additionally, it allows customization of width through the optional prop 'customWidth'.
 * Usage:
 * <StatusTag type="Reserve|Drop out|Finish" customWidth="2000px" />
 * Use for Reserve List
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

const StatusTagStuReserve: React.FC<StatusProps> = ({
  status,
  customWidth,
}) => {
  let backgroundColor: string | undefined;
  let content: string;
  let fontWeight: number;
  let textColor: string;

  switch (status) {
    case "Reserve":
      backgroundColor = Colors.Yellow;
      content = "Reserve";
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;
    case "Finish":
      backgroundColor = Colors.Tomato;
      content = "Finish";
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;
    case "In class":
      backgroundColor = Colors.LightGreen;
      content = "In class";
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;
    default:
      backgroundColor = Colors.BrightRed;
      content = "Drop out";
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

StatusTagStuReserve.defaultProps = {
  customWidth: SizesResponsive.LgLarger, // Default value for customWidth if not provided
};

export default StatusTagStuReserve;
