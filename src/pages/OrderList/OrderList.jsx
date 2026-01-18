import { Card, DatePicker } from "antd/lib";
import stypes from "./OrderList.module.css";
import { Typography } from "antd";
import { FilterOutlined, ReloadOutlined } from "@ant-design/icons";
import { Select } from "antd";
import Filter from "./components/Filter/Filter";
import ProductsList from "./components/ProductsList/ProductsList";
const { Title } = Typography;

const { RangePicker } = DatePicker;

const OrderList = () => {
  return (
    <div
      style={{
        width: "1141px",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      {/* 头 */}
      <Title level={3}>商品列表</Title>

      {/* 筛选 */}
      <Filter />

      {/* 根据筛选的渲染列表 */}
      <ProductsList />
    </div>
  );
};

export default OrderList;
