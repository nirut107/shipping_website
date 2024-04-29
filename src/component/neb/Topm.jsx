import React from "react";
import { Button } from "antd";
import { CrownTwoTone } from "@ant-design/icons";

export default function Topm() {
  return (
    <div
      style={{
        margin: 10,
        alignSelf: "center",
      }}
    >
      <Button type="primary">
        <CrownTwoTone />
        <span>อัพเกรดแพ็กเกจ</span>
      </Button>
    </div>
  );
}
