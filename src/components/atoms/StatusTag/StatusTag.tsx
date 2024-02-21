/** This component is designed to display a status tag based on a boolean status value.
 * It supports three states: "Passed" (for true), "Failed" (for false), and "-" (for null or undefined).
 * Additionally, it allows customization of width through the optional prop 'customWidth'.
 * Usage:
 * <StatusTag status={true|false|null} customWidth="optionalCustomWidth" />
 */

import React from "react";
import FontWeights from "../../../constants/FontWeight";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import SizesResponsive from "../../../constants/SizesResponsive";

interface StatusProps {
  status: boolean | null;
  customWidth?: string; // Prop for custom width
}

const StatusTag: React.FC<StatusProps> = ({ status, customWidth }) => {
  let backgroundColor: string | undefined;
  let content: string;
  let fontWeight: number;
  let textColor: string;

  switch (status) {
    case true:
      backgroundColor = Colors.DarkGreen;
      content = "Passed";
      fontWeight = FontWeights.SemiBold;
      textColor = Colors.LightWhite;
      break;
    case false:
      backgroundColor = Colors.Red;
      content = "Failed";
      fontWeight = FontWeights.SemiBold;
      textColor = Colors.LightWhite;
      break;
    default:
      backgroundColor = undefined;
      content = "-";
      fontWeight = FontWeights.SemiBold;
      textColor = Colors.Black;
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
  };

  return <div style={style}>{content}</div>;
};

StatusTag.defaultProps = {
  customWidth: SizesResponsive.LgLarger, // Default value for customWidth if not provided
};

export default StatusTag;
