import { PieChartDataProps } from "../../../interfaces/dashboard.interface";
import PercentChart from "../PercentChart/PercentChart";

const EmailChart = ({
  totalEmailTemplate,
  totalEmailReserve,
  totalEmailRemind,
  totalEmailNotice,
}: {
  totalEmailTemplate: number;
  totalEmailReserve: number;
  totalEmailRemind: number;
  totalEmailNotice: number;
}) => {
  const data: PieChartDataProps[] = [
    { name: "Reserve", value: totalEmailReserve },
    { name: "Remind", value: totalEmailRemind },
    { name: "Notice", value: totalEmailNotice },
    {
      name: "Other",
      value:
        totalEmailTemplate -
        totalEmailReserve -
        totalEmailRemind -
        totalEmailNotice,
    },
  ];
  return <PercentChart data={data} isResult={false} />;
};

export default EmailChart;
