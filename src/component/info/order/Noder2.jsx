import React, { useState } from "react";
import { Button, Input, DatePicker, Dropdown, Space, Select } from "antd";
import { PlusCircleOutlined, ControlOutlined } from "@ant-design/icons";
import FormOrder from "./FormOrder";
const { Search } = Input;
const { RangePicker } = DatePicker;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const handleChange = (value) => {
  console.log(value);
};

export default function Noder2() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        alignItems: "center",
        height: 75,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          type="primary"
          onClick={showDrawer}
          style={{
            margin: 10,
          }}
        >
          <FormOrder open={open} />
          <PlusCircleOutlined /> เพิ่มคำสั่งซื้อ
        </Button>
        <span></span>
        <Search
          placeholder="ค้นหา"
          onSearch={onSearch}
          style={{
            margin: 10,
            width: 200,
          }}
        />
        <RangePicker
          style={{
            margin: 10,
            width: 200,
          }}
          placeholder={["วันที่สั่งซื้อ...", ""]}
          separator=""
        />
        <button
          style={{
            backgroundColor: "white",
            padding: 5,
            margin: 10,
            border: "1px solid #d9d9d9",
          }}
        >
          <ControlOutlined />
          เพิ่มตัวกรอง
        </button>
      </div>
      <div
        style={{
          display: "flex",
          color: "black",
          alignItems: "center",
          margin: 10,
        }}
      >
        <p>แสดง</p>
        <Select
          labelInValue
          defaultValue={{
            value: "10",
            label: "10",
          }}
          style={{
            margin: 10,
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "20",
              label: "20",
            },
            {
              value: "30",
              label: "30",
            },
            {
              value: "40",
              label: "40",
            },
            {
              value: "50",
              label: "50",
            },
          ]}
        />
      </div>
    </div>
  );
}
