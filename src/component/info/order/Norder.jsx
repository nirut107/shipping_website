import React, { useState } from "react";
import {
  GlobalOutlined,
  ClockCircleFilled,
  TruckFilled,
  CheckSquareFilled,
  RedoOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Addremove from "./Addremove";

const items = [
  {
    label: "ทั้งหมด",
    key: "all",
    icon: <GlobalOutlined />,
  },
  {
    label: "รอดำเนินการ",
    key: "preprocess",
    icon: <ClockCircleFilled />,
  },
  {
    label: "กำลังดำเนินการ",
    key: "processing",
    icon: <TruckFilled />,
  },
  {
    label: "สำเร็จ",
    key: "done",
    icon: <CheckSquareFilled />,
  },
  {
    label: "ส้งคืนสำเร็จ",
    key: "return",
    icon: <RedoOutlined />,
  },
  {
    label: "ยกเลิก",
    key: "cancle",
    icon: <CloseCircleOutlined />,
  },
];

export default function Norder() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        height: 50,
      }}
    >
      <Menu
        style={{
          width: 750,
          height: 50,
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Addremove />
    </div>
  );
}
