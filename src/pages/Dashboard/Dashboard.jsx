import { Card, Statistic, Image, Typography, Spin } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  ShoppingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getDashboardDate } from "../../api/dashboardApi";
import dashboardImg1 from "../../assets/images/dashboard1.png";
import dashboardImg2 from "../../assets/images/dashboard2.png";
import dashboardImg3 from "../../assets/images/dashboard3.png";
import dashboardImg4 from "../../assets/images/dashboard4.png";
import DealsDetails from "./components/DealsDetails/DealsDetails";
import SalesDetails from "./components/SalesDetails/SalesDetails";

const { Title, Text } = Typography;

const Dashboard = () => {
  const sampleData = [
    { time: "2026-01-10", value: 10 },
    { time: "2026-01-11", value: 22 },
    { time: "2026-01-12", value: 15 },
    { time: "2026-01-13", value: 25 },
    { time: "2026-01-14", value: 30 },
    { time: "2026-01-15", value: 10 },
    { time: "2026-01-16", value: 30 },
  ];

  const [dashboardData, setDashboardData] = useState({
    userTotal: 0,
    articleTotal: 0,
    tagTotal: 0,
    commentTotal: 0,
  });
  const [loading, setLoading] = useState(true); // 加载状态

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const res = await getDashboardDate();
        setDashboardData(res.result);
      } catch (err) {
        console.error("获取数据失败:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "1138px",
      }}
    >
      <Title level={3}>仪表盘</Title>

      {loading ? (
        <Spin
          size="large"
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        />
      ) : (
        <div style={{ display: "flex", gap: "30px" }}>
          <Card
            styles={{ body: { padding: 16 } }}
            style={{
              display: "flex",
              borderRadius: "16px",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "262px",
              height: "162px",
            }}
          >
            <Statistic
              title="用户总数"
              value={dashboardData.userTotal}
              styles={{
                title: { fontSize: "16px" },
                content: { fontSize: "28px", fontWeight: "bold" },
              }}
            />

            <Text
              level={6}
              type="success"
              strong
              style={{ position: "absolute", bottom: "18px" }}
            >
              <svg
                width="24"
                style={{
                  verticalAlign: "bottom",
                }}
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                  fill="#00B69B"
                />
              </svg>

              <span> 8.5% </span>
              <span style={{ color: "#000" }}>Up from yesterday</span>
            </Text>
            <img
              width={60}
              src={dashboardImg1}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
              }}
            />
          </Card>

          <Card
            styles={{ body: { padding: 16 } }}
            style={{
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "262px",
              height: "162px",
            }}
          >
            <Statistic
              title="文章总数"
              value={dashboardData.articleTotal}
              styles={{
                title: { fontSize: "16px" },
                content: { fontSize: "28px", fontWeight: "bold" },
              }}
            />

            <Text
              level={6}
              type="success"
              strong
              style={{ position: "absolute", bottom: "18px" }}
            >
              <svg
                width="24"
                style={{
                  verticalAlign: "bottom",
                }}
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                  fill="#00B69B"
                />
              </svg>

              <span> 4.5% </span>
              <span style={{ color: "#000" }}>Up from yesterday</span>
            </Text>
            <img
              width={60}
              src={dashboardImg2}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
              }}
            />
          </Card>

          <Card
            styles={{ body: { padding: 16 } }}
            style={{
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "262px",
              height: "162px",
            }}
          >
            <Statistic
              title="标签总数"
              value={dashboardData.tagTotal}
              styles={{
                title: { fontSize: "16px" },
                content: { fontSize: "28px", fontWeight: "bold" },
              }}
            />

            <Text
              level={6}
              type="success"
              strong
              style={{ position: "absolute", bottom: "18px" }}
            >
              <svg
                width="24"
                style={{
                  verticalAlign: "bottom",
                }}
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                  fill="#00B69B"
                />
              </svg>

              <span> 0.5% </span>
              <span style={{ color: "#000" }}>Up from yesterday</span>
            </Text>
            <img
              width={60}
              src={dashboardImg3}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
              }}
            />
          </Card>

          <Card
            styles={{ body: { padding: 16 } }}
            style={{
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "262px",
              height: "162px",
            }}
          >
            <Statistic
              title="评论总数"
              value={dashboardData.commentTotal}
              styles={{
                title: { fontSize: "16px" },
                content: { fontSize: "28px", fontWeight: "bold" },
              }}
            />

            <Text
              level={6}
              type="success"
              strong
              style={{ position: "absolute", bottom: "18px" }}
            >
              <svg
                width="24"
                style={{
                  verticalAlign: "bottom",
                }}
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                  fill="#00B69B"
                />
              </svg>

              <span> 0.5% </span>
              <span style={{ color: "#000" }}>Up from yesterday</span>
            </Text>
            <img
              width={60}
              src={dashboardImg4}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
              }}
            />
          </Card>
        </div>
      )}

      {/* 新增访问曲线图 */}
      <SalesDetails title="近期访问人数" data={sampleData} />

      {/* DealsDetails */}
      <DealsDetails />

      {/* 新增访问曲线 和 老用户访问曲线 */}

      {/* 新用户，以及Repeated次数 */}

      {/* 即将发布的产品 */}

      {/* 价格分析 */}
    </div>
  );
};

export default Dashboard;
