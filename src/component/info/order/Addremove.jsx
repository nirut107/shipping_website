import React from "react";
import { DownOutlined, DiffOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Checkbox } from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const items = [
  {
    label: (
      <Checkbox name="1" onChange={onChange}>
        Checkbox
      </Checkbox>
    ),
    key: "0",
  },
  {
    label: (
      <Checkbox name="2" onChange={onChange}>
        Checkbox
      </Checkbox>
    ),
    key: "2",
  },
  {
    label: (
      <Checkbox name="3" onChange={onChange}>
        Checkbox
      </Checkbox>
    ),
    key: "3",
  },
  {
    label: (
      <Checkbox name="4" onChange={onChange}>
        Checkbox
      </Checkbox>
    ),
    key: "4",
  },
  {
    label: (
      <Checkbox name="5" onChange={onChange}>
        Checkbox
      </Checkbox>
    ),
    key: "5",
  },
  {
    label: (
      <Checkbox name="6" onChange={onChange}>
        Checkbox
      </Checkbox>
    ),
    key: "6",
  },
];

export default function Addremove() {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <DiffOutlined /> เพิ่ม/ลด คอลั่ม
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
