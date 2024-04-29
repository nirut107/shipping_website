import React, { useState } from "react";
import Topb from "./Topb";
import { Button } from "antd";
import Topm from "./Topm";
import Topuser from "./Topuser";
import Topf from "./Topf";
import "../neb/Nebar.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Info from "../info/pageshow";

export default function Nevbar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <div className="top">
        <div className="topleft">
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              alignSelf: "center",
              margin: 5,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <div className="topright">
          <Topm />
          <Topb />
          <Topuser />
        </div>
      </div>
      <div className="side">
        <Topf collapsed={collapsed} />
        <Info />
      </div>
    </div>
  );
}
