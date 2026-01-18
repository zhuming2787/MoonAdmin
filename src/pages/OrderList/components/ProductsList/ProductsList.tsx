import { Flex, Space, Table, Tag } from "antd";
import styles from "./ProductsList.module.css";
interface ProductItem {
  key: string;
  id: string;
  name: string;
  address: string;
  date: string;
  type: "Electric" | "Water" | "Gas" | "Internet";
  statusTags: string[];
}

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ADDRESS",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
    render: (_: unknown, record: ProductItem) => (
      <Flex gap="small" align="center" wrap>
        {record.statusTags.map((tag) => {
          let color: Parameters<typeof Tag>["0"]["color"] = "green";
          if (tag === "Pending") color = "orange";
          if (tag === "Failed") color = "volcano";
          if (tag === "Processing") color = "geekblue";
          if (tag === "Canceled") color = "gray";
          return (
            <Tag color={color} key={`${record.key}-${tag}`}>
              {tag}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
];
const data: ProductItem[] = [
  {
    key: "1",
    id: "PRD001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt.448, New York",
    date: "04 Sep 2019",
    type: "Electric",
    statusTags: ["Completed"],
  },
  {
    key: "2",
    id: "PRD002",
    name: "Michael Smith",
    address: "123 Main St, Apt.101, Los Angeles",
    date: "15 Oct 2019",
    type: "Water",
    statusTags: ["Pending"],
  },
  {
    key: "3",
    id: "PRD003",
    name: "Emily Johnson",
    address: "456 Oak Ave, Suite 202, Chicago",
    date: "22 Nov 2019",
    type: "Gas",
    statusTags: ["Processing"],
  },
  {
    key: "4",
    id: "PRD004",
    name: "David Williams",
    address: "789 Pine Rd, Unit 303, Houston",
    date: "05 Dec 2019",
    type: "Internet",
    statusTags: ["Failed"],
  },
  {
    key: "5",
    id: "PRD005",
    name: "Sarah Brown",
    address: "321 Cedar Ln, Apt.404, Miami",
    date: "18 Jan 2020",
    type: "Electric",
    statusTags: ["Completed"],
  },
  {
    key: "6",
    id: "PRD006",
    name: "Robert Jones",
    address: "654 Birch Dr, Suite 505, Seattle",
    date: "29 Feb 2020",
    type: "Water",
    statusTags: ["Canceled"],
  },
  {
    key: "7",
    id: "PRD007",
    name: "Jennifer Garcia",
    address: "987 Spruce Way, Unit 606, Boston",
    date: "10 Mar 2020",
    type: "Gas",
    statusTags: ["Processing"],
  },
  {
    key: "8",
    id: "PRD008",
    name: "William Martinez",
    address: "876 Fir Ct, Apt.707, Phoenix",
    date: "02 Apr 2020",
    type: "Internet",
    statusTags: ["Completed"],
  },
  {
    key: "9",
    id: "PRD009",
    name: "Linda Hernandez",
    address: "543 Maple Blvd, Suite 808, Philadelphia",
    date: "17 May 2020",
    type: "Electric",
    statusTags: ["Pending"],
  },
  {
    key: "10",
    id: "PRD010",
    name: "Thomas Lopez",
    address: "210 Willow Ave, Unit 909, San Antonio",
    date: "24 Jun 2020",
    type: "Water",
    statusTags: ["Failed"],
  },
];
const ProductsList: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* 渲染列表 */}
      <div style={{ width: "1141px", height: "733px" }}>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={{ pageSize: 10 }}
          scroll={{ x: "max-content" }}
        />
      </div>
      {/* 页面具体信息 */}
    </div>
  );
};

export default ProductsList;
