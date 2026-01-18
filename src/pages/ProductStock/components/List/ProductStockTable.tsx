import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table, Image, Tag, Button, Space } from "antd";

interface Product {
  key: string;
  image: string;
  productName: string;
  category: string;
  price: string;
  piece: number;
  availableColors: string[];
}

// 替换后的 data 数组（图片为国内可访问的产品对应图）
const data: Product[] = [
  {
    key: "1",
    image: "https://picsum.photos/40/40?seed=applewatch", // 对应：数码产品（手表）
    productName: "Apple Watch Series 4",
    category: "Digital Product",
    price: "$690.00",
    piece: 63,
    availableColors: ["#000000", "#888888", "#FFCCCC"],
  },
  {
    key: "2",
    image: "https://picsum.photos/40/40?seed=headphone", // 对应：数码产品（耳机）
    productName: "Microsoft Headsquare",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    availableColors: ["#000000", "#FFCCCC", "#4A90E2", "#F1C40F"],
  },
  {
    key: "3",
    image: "https://picsum.photos/40/40?seed=womendress", // 对应：时尚（女装）
    productName: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    availableColors: ["#993366", "#87CEEB", "#1A1A2E", "#3341FF"],
  },
  {
    key: "4",
    image: "https://picsum.photos/40/40?seed=mobilephone", // 对应：手机
    productName: "Samsung A50",
    category: "Mobile",
    price: "$400.00",
    piece: 67,
    availableColors: ["#3341FF", "#000000", "#993366"],
  },
  {
    key: "5",
    image: "https://picsum.photos/40/40?seed=digitalcamera", // 对应：电子（相机）
    productName: "Camera",
    category: "Electronic",
    price: "$420.00",
    piece: 52,
    availableColors: ["#3341FF", "#000000", "#993366"],
  },
  {
    key: "6",
    image: "https://picsum.photos/40/40?seed=headphone", // 重复产品用同一图
    productName: "Microsoft Headsquare",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    availableColors: ["#000000", "#FFCCCC", "#4A90E2", "#F1C40F"],
  },
  {
    key: "7",
    image: "https://picsum.photos/40/40?seed=womendress", // 重复产品用同一图
    productName: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    availableColors: ["#993366", "#87CEEB", "#1A1A2E", "#3341FF"],
  },
];

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    width: 80,
    render: (imgUrl: string) => (
      <Image
        src={imgUrl}
        width={40}
        height={40}
        style={{ borderRadius: 4 }}
        preview={false}
      />
    ),
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
    width: 200,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    width: 150,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: 120,
  },
  {
    title: "Piece",
    dataIndex: "piece",
    key: "piece",
    width: 80,
  },
  {
    title: "Available Color",
    dataIndex: "availableColors",
    key: "availableColors",
    width: 200,
    render: (colors: string[]) => (
      <Space size={4}>
        {colors.map((color, index) => (
          <div
            key={`color-${index}`}
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: color,
              border: "1px solid #eee",
            }}
          />
        ))}
      </Space>
    ),
  },
  {
    title: "Action",
    key: "action",
    width: 120,
    render: () => (
      <Space size={4}>
        <Button
          type="text"
          icon={<EditOutlined />}
          size="small"
          style={{ color: "#888" }}
        />
        <Button
          type="text"
          icon={<DeleteOutlined />}
          size="small"
          style={{ color: "#FF4D4F" }}
        />
      </Space>
    ),
  },
];

const ProductStockTable: React.FC = () => {
  return (
    <div
      style={{
        marginTop: "18px",
        width: "1141px",
        background: "#fff",
        borderRadius: "8px",
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        bordered={false}
        pagination={{
          pageSize: 9,
          total: 78,
          showSizeChanger: false,
          showQuickJumper: false,
          showTotal: (total) => `Showing 1-09 of ${total}`,
        }}
        scroll={{ x: "max-content" }}
        style={{ border: "1px solid #e0e0e0", borderRadius: "8px" }}
      />
    </div>
  );
};

export default ProductStockTable;
