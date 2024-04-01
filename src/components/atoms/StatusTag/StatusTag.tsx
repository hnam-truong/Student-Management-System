/** This component is designed to display a status tag based on a boolean status value.
 * It supports all states
 * Additionally, it allows customization of width through the optional prop 'customWidth'.
 * Usage:
 * <StatusTag status={boolean|string|null} content={string} customWidth="optionalCustomWidth" />
 * content = "-" (for default value).
 */

import React from "react";
import FontWeights from "../../../constants/FontWeight";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import SizesResponsive from "../../../constants/SizesResponsive";

interface StatusProps {
  status: boolean | string | null;
  content?: string;
  customWidth?: string; // Prop for custom width
  isBorder?: boolean;
}

const StatusTag: React.FC<StatusProps> = ({
  status,
  content,
  customWidth,
  isBorder,
}) => {
  let backgroundColor: string | undefined;
  let fontWeight: number;
  let textColor: string;
  let border: string | undefined;

  switch (status) {
    // For Status tag
    case true:
    case "Active":
    case "Finish":
      backgroundColor = Colors.DarkGreen;
      fontWeight = FontWeights.SemiBold;
      textColor = Colors.LightWhite;
      break;

    case false:
      backgroundColor = Colors.Red;
      fontWeight = FontWeights.SemiBold;
      textColor = Colors.LightWhite;
      break;

    case "Inactive":
      backgroundColor = Colors.Fourth;
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;

    case "Disable":
      backgroundColor = Colors.SlateGray;
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;

    case "In class":
      backgroundColor = Colors.LightGreen;
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;

    case "Reserve":
      backgroundColor = Colors.Yellow;
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;

    case "Drop out":
      backgroundColor = Colors.BrightRed;
      fontWeight = FontWeights.Normal;
      textColor = Colors.LightWhite;
      break;

    case "Opening":
      backgroundColor = Colors.LightGreen;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      break;

    case "Planning":
      backgroundColor = Colors.LightDark;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      break;

    case "Scheduled":
      backgroundColor = Colors.Yellow;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      border = Colors.LightWhite;
      break;

    case "Completed":
      backgroundColor = Colors.Red;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      border = Colors.LightWhite;
      break;

    case "Closed":
      backgroundColor = Colors.LightOrange;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      border = Colors.LightWhite;
      break;

    // For User tag
    case "Admin":
      backgroundColor = Colors.LimeGreen;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      break;

    case "Trainer":
      backgroundColor = Colors.Third;
      fontWeight = FontWeights.Medium;
      textColor = Colors.LightWhite;
      break;

    default:
      backgroundColor = undefined;
      fontWeight = FontWeights.SemiBold;
      textColor = Colors.Black;
      border = `1px solid ${Colors.Black}`;
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
    border: isBorder ? border : undefined,
  };

  return <div style={style}>{content}</div>;
};

StatusTag.defaultProps = {
  customWidth: SizesResponsive.XXLarge, // Default value for customWidth if not provided
  isBorder: false,
  content: "-",
};

export default StatusTag;
