import React, { useState } from "react";
import { Card, Table, Select, Tag, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./DealsDetails.module.css";

const { Title } = Typography;
const { Option } = Select;

const DealsDetails = () => {
  const [selectedMonth, setSelectedMonth] = useState("October");

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      width: 180,
      render: (text, record) => (
        <div className={styles.productNameCell}>
          <img
            src={record.productImage}
            alt={text}
            className={styles.productAvatar}
          />
          <span className={styles.productNameText}>{text}</span>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: 240,
    },
    {
      title: "Date - Time",
      dataIndex: "dateTime",
      key: "dateTime",
      width: 200,
    },
    {
      title: "Piece",
      dataIndex: "piece",
      key: "piece",
      width: 100,
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 120,
      render: (text) => `$${text.toLocaleString()}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      align: "center",
      render: (text) => (
        <Tag color="#10b981" className={styles.statusTag}>
          {text}
        </Tag>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      productName: "Apple Watch",
      productImage: "https://picsum.photos/id/65/40/40", // 替换为你的产品图片
      location: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12.53 PM",
      piece: 423,
      amount: 34295,
      status: "Delivered",
    },
  ];

  return (
    <Card className={styles.dealsCard} bordered={false}>
      {/* 标题 + 月份筛选栏 */}
      <div className={styles.headerBar}>
        <Title level={3} className={styles.title}>
          Deals Details
        </Title>
        <Select
          value={selectedMonth}
          onChange={setSelectedMonth}
          className={styles.monthSelect}
          size="middle"
        >
          <Option value="January">January</Option>
          <Option value="February">February</Option>
          <Option value="October">October</Option>
          <Option value="December">December</Option>
        </Select>
      </div>

      {/* 交易详情表格 */}
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered={false}
        className={styles.dealsTable}
        rowKey="key"
      />
    </Card>
  );
};

export default DealsDetails;
