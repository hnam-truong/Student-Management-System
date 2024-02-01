import { Button, Dropdown, Space, message, } from "antd";
import { AiOutlineDownload, } from "react-icons/ai";
import Search from "antd/es/input/Search";
import type { SearchProps } from "antd/es/input/Search";
import { IoIosAddCircleOutline, IoIosSearch, IoMdFunnel } from "react-icons/io";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { RiDownloadCloud2Line } from "react-icons/ri";
import "./HeaderOfTable.scss";

const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
};

const items: MenuProps["items"] = [
    {
        label: "1st menu item",
        key: "1",
        icon: <UserOutlined />,
    },
    {
        label: "2nd menu item",
        key: "2",
        icon: <UserOutlined />,
    },
    {
        label: "3rd menu item",
        key: "3",
        icon: <UserOutlined />,
        danger: true,
    },
    {
        label: "4rd menu item",
        key: "4",
        icon: <UserOutlined />,
        danger: true,
        disabled: true,
    },
];

const menuProps = {
    items,
    onClick: handleMenuClick,
};

function HeaderOfTable() {
    const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
        console.log(info?.source, value);
    return (
        <div className="edit-container">
            <div className="edit-container-list">Student List</div>
            <div className="edit-button-container">
                <Search
                    className="edit-button-search"
                    placeholder="input search text"
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
                            <IoIosAddCircleOutline
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                        }
                        type="primary"
                    >
                        Add new
                    </Button>
                </div>
            </div>
            <div className="button-action-container">
                <Dropdown menu={menuProps}>
                    <Button className="button-action">
                        <Space>
                            Action
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </div>
        </div>
    )
}

export default HeaderOfTable