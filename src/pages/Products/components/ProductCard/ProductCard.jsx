import { Card, Rate, Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import productImg from "../../../../assets/images/product.png";
const images = [productImg, productImg];
import styles from "./ProductCard.module.css";

const ProductCard = ({
  width = "361px",
  height = "497px",
  title = "Apple Watch Series 4",
  price = 120.0,
  rating = 5, // 新增评分默认值
  reviewCount = 128, // 新增评论数默认值
}) => {
  const imagelist = images.map((item, index) => {
    return <img key={index} src={item} />;
  });

  return (
    <Card
      className={styles.productCard}
      style={{
        borderRadius: "16px",
        width: width,
        height: height,
        overflow: "hidden",
      }}
    >
      <div className={styles.carouselWrapper}>
        <Carousel arrows style={{ height: " 280px" }}>
          {imagelist}
        </Carousel>
      </div>

      <footer className={styles.footer}>
        <div className={styles.productInfo}>
          <p className={styles.productTitle}>{title}</p>
          <p className={styles.productPrice}>${price.toFixed(2)}</p>

          <div className={styles.ratingWrapper}>
            <Rate disabled defaultValue={rating} />
            <span className={styles.reviewCount}>({reviewCount})</span>
          </div>

          <Button
            style={{
              backgroundColor: "#E2EAF8",
              borderColor: "#979797",
              width: "126px",
              height: "38px",
            }}
            block
            className={styles.addToCartBtn}
          >
            <p style={{ fontWeight: "bold" }}>Add to Cart</p>
          </Button>
        </div>

        <div className={styles.heartIcon}>
          <HeartOutlined size="large" />
        </div>
      </footer>
    </Card>
  );
};

export default ProductCard;
