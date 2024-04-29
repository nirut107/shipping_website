import { Space, Table, Tag, Checkbox } from "antd";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const columns = [
  {
    title: <Checkbox onChange={onChange}></Checkbox>,
    key: "key",
    dataIndex: "key",
  },
  {
    title: "ช่องทาง",
    dataIndex: "ช่องทาง",
    key: "ช่องทาง",
  },
  {
    title: "รูปภาพ",
    dataIndex: "รูปภาพ",
    key: "รูปภาพ",
  },
  {
    title: "หมายเลขคำสั่งซื้อ",
    dataIndex: "หมายเลขคำสั่งซื้อ",
    key: "หมายเลขคำสั่งซื้อ",
  },
  {
    title: "ชื่อลูกค้า",
    dataIndex: "ชื่อลูกค้า",
    key: "ชื่อลูกค้า",
  },
  {
    title: "เบอร์โทรศัพท์",
    dataIndex: "เบอร์โทรศัพท์",
    key: "เบอร์โทรศัพท์",
  },
  {
    title: "ชื่อโซเชียล",
    dataIndex: "ชื่อโซเชียล",
    key: "ชื่อโซเชียล",
  },
  {
    title: "สถานะคำสั่งซื้อ",
    dataIndex: "ถานะคำสั่งซื้อ",
    key: "ถานะคำสั่งซื้อ",
  },
  {
    title: "การชำระเงิน",
    dataIndex: "การชำระเงิน",
    key: "การชำระเงิน",
  },
  {
    title: "สถานะการชำระเงิน",
    dataIndex: "สถานะการชำระเงิน",
    key: "สถานะการชำระเงิน",
  },
  {
    title: "ขนส่ง",
    dataIndex: "ขนส่ง",
    key: "ขนส่ง",
  },
  {
    title: "หมายเลขพัสดุ",
    dataIndex: "หมายเลขพัสดุ",
    key: "หมายเลขพัสดุ",
  },
  {
    title: "จำนวน",
    dataIndex: "จำนวน",
    key: "จำนวน",
  },
  {
    title: "ยอดสุทธิ",
    dataIndex: "ยอดสุทธิ",
    key: "ยอดสุทธิ",
  },
  {
    title: "แท็ก",
    dataIndex: "แท็ก",
    key: "แท็ก",
  },
  {
    title: "พนักงานขาย",
    dataIndex: "พนักงานขาย",
    key: "พนักงานขาย",
  },
  {
    title: "วันสั่งซื้อ",
    dataIndex: "วันสั่งซื้อ",
    key: "วันสั่งซื้อ",
  },
  {
    title: "ดำเนินการ",
    dataIndex: "ดำเนินการ",
    key: "ดำเนินการ",
  },
];
const data = [
  {
    key: "",
    ช่องทาง: "",
    รูปภาพ: "",
    หมายเลขคำสั่งซื้อ: "",
    ชื่อลูกค้า: "",
    เบอร์โทรศัพท์: "",
    ชื่อโซเชียล: "",
    สถานะคำสั่งซื้อ: "",
    การชำระเงิน: "",
    สถานะการชำระเงิน: "",
    ขนส่ง: "",
    หมายเลขพัสดุ: "",
    จำนวน: "",
    ยอดสุทธิ: "",
    แท็ก: "",
    พนักงานขาย: "",
    วันสั่งซื้อ: "",
    ดำเนินการ: "",
  },
  {
    key: "sfsdfsdf",
    ช่องทาง: "sfdsdfs",
    รูปภาพ: "sdfsdfds",
    หมายเลขคำสั่งซื้อ: "sfsdfsdf",
    ชื่อลูกค้า: "sfsdfsdf",
    เบอร์โทรศัพท์: "sfdsdfdsf",
    ชื่อโซเชียล: "sdfsdfsdf",
    สถานะคำสั่งซื้อ: "sdfsdfsd",
    การชำระเงิน: "sfdsdf",
    สถานะการชำระเงิน: "sdfsdfdsf",
    ขนส่ง: "sdfsdf",
    หมายเลขพัสดุ: "sdfsdfs",
    จำนวน: "sdfsdf",
    ยอดสุทธิ: "sdfsdf",
    แท็ก: "sdfsdf",
    พนักงานขาย: "hjhgj",
    วันสั่งซื้อ: "gjghjghj",
    ดำเนินการ: "ghjghjhg",
  },
];
export default function ListOfOrder() {
  return (
    <Table
      scroll={{
        x: 1300,
      }}
      columns={columns}
      dataSource={data}
    />
  );
}
