import { Carousel, Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import styles from "./PromoCarousel.module.css";
const { Title, Text } = Typography;

const carouselData = [
  {
    id: 1,
    date: "September 12-22",
    title: "Enjoy free home delivery in this summer",
    subtitle: "Designer Dresses - Pick from trendy Designer Dress.",
    buttonText: "Get Started",
  },
  {
    id: 2,
    date: "August 1-10",
    title: "Summer Sale: Up to 50% off on all items",
    subtitle: "Shop now and get exclusive discounts on your favorite styles.",
    buttonText: "Shop Now",
  },
];

const PromoCarousel = ({ Lists = carouselData }) => {
  // 自定义左右箭头
  const renderArrow = (type, onClick) => {
    return (
      <button
        className={`carousel-arrow carousel-arrow--${type}`}
        onClick={onClick}
      >
        {type === "prev" ? <LeftOutlined /> : <RightOutlined />}
      </button>
    );
  };

  return (
    <Carousel
      arrows
      renderArrow={renderArrow}
      autoplay
      className={styles.promoCarousel}
    >
      {Lists.map((item) => (
        <div key={item.id} className={styles.carouselItem}>
          {/* 背景纹理层 */}
          <div className={styles.carouselBgTexture} />

          {/* 内容区域 */}
          <div className={styles.carouselContent}>
            <Text className={styles.carouselData}>{item.date}</Text>
            <Title level={1} className={styles.carouselTitle}>
              {item.title}
            </Title>
            <Text className={styles.carouselSubtitle}>{item.subtitle}</Text>
            <Button className={styles.carouselBtn} type="primary">
              {item.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default PromoCarousel;
