import { Button, Dropdown, Space, message } from "antd";
import { AiOutlineDownload } from "react-icons/ai";
import Search from "antd/es/input/Search";
import type { SearchProps } from "antd/es/input/Search";
import { IoIosSearch, IoMdFunnel } from "react-icons/io";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";
import { MdAddCircleOutline } from "react-icons/md";
import "./HeaderOfTable.scss";
interface HeaderOfTableProps {
  showModal?: () => void;
  isSelectStudent?: boolean;
}

function HeaderOfTable({ showModal, isSelectStudent }: HeaderOfTableProps) {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const items: MenuProps["items"] = [
    {
      label: "Update status student",
      key: "1",
      icon: <HiOutlinePencil />,
      onClick: showModal,
      disabled: isSelectStudent,
    },
  ];
  return (
    <div className="edit-container">
      <div className="edit-container-list">Student List</div>
      <div className="edit-button-container">
        <Search
          className="edit-button-search"
          placeholder="Search for..."
          allowClear
          enterButton={
            <Button
              className="button-add"
              icon={
                <IoMdFunnel
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              }
              type="primary"
            >
              Filter
            </Button>
          }
          size="large"
          onSearch={onSearch}
          prefix={<IoIosSearch />}
        />

        <div className="button-export-add">
          <Button
            className="button-import"
            icon={
              <RiDownloadCloud2Line
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            }
            type="primary"
            danger
          >
            Import
          </Button>
          <Button
            className="button-export"
            icon={
              <AiOutlineDownload
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            }
            type="primary"
            danger
          >
            Export
          </Button>
          <Button
            className="button-add"
            icon={
              <MdAddCircleOutline
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            }
            type="primary"
          >
            <strong>Add new</strong>
          </Button>
        </div>
      </div>
      <div className="button-action-container">
        <Dropdown menu={{ items }}>
          <Button className="button-action">
            <Space>
              Action
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default HeaderOfTable;
