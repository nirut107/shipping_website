import React from "react";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import FormOrderlist from "./FormOrderlist";

export default function FormOrder(props) {
  console.log(props);

  return (
    <Drawer
      title="เพิ่มคำสั่งซื้อ"
      width={720}
      onClose={props.onClose}
      open={props.open}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
      extra={
        <Space>
          <Button onClick={() => {}}>Cancel</Button>
          <Button
            onClick={() => {
              props.onClose(false);
            }}
            type="primary"
          >
            Submit
          </Button>
        </Space>
      }
    >
      <FormOrderlist />
    </Drawer>
  );
}
