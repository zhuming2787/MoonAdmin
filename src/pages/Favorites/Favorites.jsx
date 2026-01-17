import ProductCard from "../Products/components/ProductCard/ProductCard";
import { Typography } from "antd";
const { Title } = Typography;
const Favorites = () => {
  return (
    <div style={{ width: "1141px" }} className="products-container">
      <Title level={3}>喜欢</Title>

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Favorites;
