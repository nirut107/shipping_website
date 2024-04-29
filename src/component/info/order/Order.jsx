import React from "react";
import { LeftSquareOutlined, HomeOutlined } from "@ant-design/icons";
import Norder from "./Norder";
import Noder2 from "./Noder2";
import ListOfOrder from "./ListOfOrder";

export default function Order() {
  return (
    <div className="all">
      <div
        style={{
          padding: 15,
          backgroundColor: "white",
          color: "black",
        }}
      >
        <LeftSquareOutlined /> คำสั่งซื้อ
      </div>
      <div
        style={{
          padding: 5,
          paddingLeft: 10,
          backgroundColor: "gray",
          color: "black",
        }}
      >
        <HomeOutlined /> หน้าหลัก/คำสั่งซื้อ
      </div>
      <div
        className="order"
        style={{
          paddingRight: 10,
          backgroundColor: "white",
        }}
      >
        <Norder />
      </div>
      <div
        style={{
          borderBottom: "1px solid #d9d9d9",
        }}
      >
        <Noder2 />
      </div>
      <ListOfOrder />
    </div>
  );
}
