import { Card, Statistic, Image, Typography, Spin } from "antd";
import PromoCarousel from "./components/PromoCarousel/PromoCarousel";
import ProductCard from "./components/ProductCard/ProductCard";
const { Title } = Typography;

const Products = () => {
  return (
    <div style={{ width: "1141px" }} className="products-container">
      {/* 头 */}
      <Title level={3}>商品</Title>

      {/* 轮播图 */}
      <PromoCarousel />

      {/* 商品渲染 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          rowGap: "16px",
          marginTop: "16px",
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
