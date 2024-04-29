import React from "react";
import {
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Avatar } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    "ร้านผ้า BY RF",
    "sub1",
    <Avatar
      style={{ backgroundColor: "#f56a00" }}
      size={18}
      icon={<UserOutlined />}
    />,
    [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]
  ),
];
const Topuser = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{}}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
};
export default Topuser;
