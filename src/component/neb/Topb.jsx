import React, { useState } from "react";
import Topuser from "./Topuser";
import {
  MessageFilled,
  WalletFilled,
  CalculatorFilled,
  PlusCircleFilled,
  BellFilled,
} from "@ant-design/icons";
import { Menu, Button, Avatar } from "antd";
const items = [
  {
    label: "100 B",
    key: "wallet",
    icon: <WalletFilled />,
  },
  {
    key: "chat",
    icon: <MessageFilled />,
  },
  {
    key: "Cal",
    icon: <CalculatorFilled />,
  },
  {
    key: "plus",
    icon: <PlusCircleFilled />,
  },
  {
    key: "noti",
    icon: (
      <a href="https://ant.design">
        <BellFilled />
      </a>
    ),
  },
];
const Topb = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Menu
        style={{
          flex: "auto",
          justifyItems: "center",
          alignSelf: "center",
          fontSize: 16,
          minWidth: 350,
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        items={items}
      />
    </div>
  );
};
export default Topb;
