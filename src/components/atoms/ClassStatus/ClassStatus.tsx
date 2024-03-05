/** This component is designed to display a status tag based on a boolean status value.
 * It supports three states: "Finished" (for true), "Onboarding" (for false), and "-" (for null or undefined).
 * Additionally, it allows customization of width through the optional prop 'customWidth'.
 * Usage:
 * <ClassStatus status={true|false|null} customWidth="optionalCustomWidth" />
 */

import React from "react";
import FontWeights from "../../../constants/FontWeight";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import SizesResponsive from "../../../constants/SizesResponsive";
import FontSizes from "../../../constants/FontSizes";

interface StatusProps {
  status: string;
  customWidth?: string;
  isBorder?: boolean;
}

const ClassStatus: React.FC<StatusProps> = ({
  status,
  customWidth,
  isBorder,
}) => {
  let backgroundColor: string | undefined;
  let fontWeight: number;
  let textColor: string;
  let border: string | undefined;
  let fontSize: string;

  switch (status) {
    case "Opening":
      backgroundColor = Colors.LightGreen;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      fontSize = FontSizes.LgSmall;
      break;
    case "Planning":
      backgroundColor = Colors.LightDark;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      fontSize = FontSizes.LgSmall;
      break;
    case "Scheduled":
      backgroundColor = Colors.Yellow;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      border = Colors.LightWhite;
      fontSize = FontSizes.LgSmall;
      break;
    case "Completed":
      backgroundColor = Colors.Red;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      border = Colors.LightWhite;
      fontSize = FontSizes.LgSmall;
      break;
    default:
      backgroundColor = Colors.LightOrange;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      border = Colors.LightWhite;
      fontSize = FontSizes.LgSmall;
      break;
  }

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor,
    color: textColor,
    fontWeight,
    fontSize,
    borderRadius: Sizes.Medium,
    width: customWidth,
    height: Sizes.Large,
    border: isBorder ? border : undefined,
  };

  return <div style={style}>{status}</div>;
};

ClassStatus.defaultProps = {
  customWidth: SizesResponsive.LgLarger,
  isBorder: false,
};

export default ClassStatus;
