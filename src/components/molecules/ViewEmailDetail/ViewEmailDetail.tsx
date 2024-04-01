import { Switch, Collapse, Checkbox, Table } from "antd";
import type { CollapseProps, TableColumnsType } from "antd";
import ReactQuill from "react-quill";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import "./ViewEmailDetail.scss";
import { IEmail } from "../../../interfaces/email.interface";
import { BackButton } from "../../atoms/CustomButton/CustomButton";
import { IModuleScore } from "../../../interfaces/module-score";

interface ViewEmailDetailProps {
  data: IEmail | null;
}
interface Item {
  label: string;
  value: string | number | boolean;
  key: string;
}

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

const ViewEmailDetail = ({ data }: ViewEmailDetailProps) => {
  // const { moduleScore, fetchModuleScores } = useModuleScoreStore();
  // if (data?.Category === "Score") {
  //   fetchModuleScores();
  // }
  const listLeftItems: Item[] = [
    {
      label: "Email name",
      value: data?.Name || "",
      key: "Name",
    },
    {
      label: "Description",
      value: data?.Description || "",
      key: "Description",
    },
    { label: "Categories", value: data?.Category || "", key: "Categories" },
    { label: "Apply to", value: data?.ApplyTo || "", key: "Apply to" },
  ];
  const listRightItems: Item[] = [
    { label: "Created on", value: data?.CreatedOn || "", key: "Created on" },
    { label: "Created by", value: data?.CreatedBy || "", key: "Created by" },
  ];
  const senderItems: CollapseProps["items"] = [
    {
      key: "Sender",
      label: <div className="header-title">Sender</div>,
      children: (
        <div className="collapse">
          <div className="item-collapse">
            <div className="item-collapse-label">From</div>
            <div className="item-collapse-content">vivi@gmail.com</div>
          </div>
        </div>
      ),
    },
  ];
  const contentItems: CollapseProps["items"] = [
    {
      key: "Content",
      label: <div className="header-title">Content</div>,
      children: (
        <div className="collapse">
          <div className="item-collapse ">
            <div className="item-collapse-label">Subject</div>
            <div className="item-collapse-content">{data?.Subject}</div>
          </div>
          <div className="item-collapse ">
            <div className="item-collapse-label">User dear name</div>
            <Checkbox checked={data?.DearName} disabled />
          </div>
          <div className="item-collapse ">
            <div className="item-collapse-label">Body</div>
            <ReactQuill
              value={data?.Body}
              readOnly
              style={{ height: "fit-content" }}
            />
          </div>
        </div>
      ),
    },
  ];
  const columns: TableColumnsType<IModuleScore> = [
    {
      title: "Module Name",
      dataIndex: "moduleName",
      key: "moduleName",
    },
  ];

  const scoreItems: CollapseProps["items"] = [
    {
      key: "score",
      label: <div className="header-title">Score</div>,
      children: (
        <div className="collapse score-module">
          <div className="ant-table-container">
            <Table columns={columns} bordered />
          </div>
          <div className="ant-table-container">
            <Table columns={columns} bordered />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="email-detail">
      <div className="back-btn">
        <BackButton />
      </div>
      <TableHeader
        title="Template details"
        isExport={false}
        isImport={false}
        isSearch={false}
        isHeaderBottom={false}
      />
      <div className="email-detail-header">
        <div className="header-side">
          {listLeftItems.map((item) => (
            <div className="item" key={item.key}>
              <div className="item-label">{item.label}</div>
              <div className="item-content">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="header-side">
          {listRightItems.map((item) => (
            <div className="item" key={item.key}>
              <div className="item-label">{item.label}</div>
              <div className="item-content">{item.value}</div>
            </div>
          ))}
          <div className="item">
            <div className="item-label">Active</div>
            <div className="item-content-switch">
              <Switch value />
            </div>
          </div>
        </div>
        <hr /> <hr />
      </div>
      {[senderItems, contentItems, scoreItems].map((prop) => (
        <div className="item-detail" key={prop[0].key}>
          <Collapse items={prop} />
        </div>
      ))}
    </div>
  );
};

export default ViewEmailDetail;
