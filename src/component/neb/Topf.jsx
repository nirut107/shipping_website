import React, { useState } from "react";
import {
  DashboardOutlined,
  UsergroupAddOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  TruckOutlined,
  TeamOutlined,
  AppstoreOutlined,
  ApiOutlined,
  LineChartOutlined,
  ToolOutlined,
  SettingOutlined,
  CodeSandboxOutlined,
  LinkOutlined,
  GoldOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Menu, Image } from "antd";

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
  getItem("หน้าหลัก", "2", <HomeOutlined />),
  getItem("แผงควบคุม", "3", <DashboardOutlined />),
  getItem("คำสั่งซื้อ", "sub1", <ShoppingCartOutlined />, [
    getItem("คำสั่งซื้อ", "4", <ShoppingCartOutlined />),
  ]),
  getItem("การจัดส่ง", "5", <TruckOutlined />),
  getItem("ลูกค้า", "5.5", <TeamOutlined />),
  getItem("สินค้า", "sub2", <CodeSandboxOutlined />, [
    getItem("สินค้า", "6", <CodeSandboxOutlined />),
    getItem("การเชื่อมต่อสินค้า", "7", <LinkOutlined />),
    getItem("รูปแบบสินค้า", "8", <GoldOutlined />),
  ]),
  getItem("คลังสินค้า", "9", <AppstoreOutlined />),
  getItem("ผู้ใช้งาน", "10", <UsergroupAddOutlined />),
  getItem("การจัดส่ง", "11", <ApiOutlined />),
  getItem("ลูกค้า", "12", <TeamOutlined />),
  getItem("การเชื่อมต่อ", "13", <AppstoreOutlined />),
  getItem("ผู้ใช้งาน", "sub3", <LineChartOutlined />, [
    getItem("ผู้ใช้งาน", "14", <LineChartOutlined />),
    getItem("สิทธิ์ผู้ใช้งาน", "15", <UserSwitchOutlined />),
  ]),
  getItem("เครื่องมือ", "16", <ToolOutlined />),
  getItem("ตั่งค่า", "17", <SettingOutlined />),
];
const Topf = (props) => {
  return (
    <div
      style={{
        position: "static",
        width: 256,
      }}
    >
      <Menu
        style={{
          height: 2000,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={props.collapsed}
        items={items}
      />
    </div>
  );
};
export default Topf;
