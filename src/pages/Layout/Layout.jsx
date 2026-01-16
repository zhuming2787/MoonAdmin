import { Layout, Menu, Avatar, Space, Typography, Dropdown } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  BookOutlined,
  TagOutlined,
  FileTextOutlined,
  MessageOutlined,
  DownOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import myAvatar from "../../assets/images/Avatar.png";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false); // 侧边栏折叠状态
  const navigate = useNavigate();
  const location = useLocation(); // 获取当前路由

  // 侧边栏菜单数据
  const menuItems = [
    { key: "/dashboard", icon: <DashboardOutlined />, label: "仪表盘" },
    { key: "/user", icon: <UserOutlined />, label: "用户管理" },
    { key: "/category", icon: <BookOutlined />, label: "分类管理" },
    { key: "/tag", icon: <TagOutlined />, label: "标签管理" },
    { key: "/article", icon: <FileTextOutlined />, label: "文章管理" },
    { key: "/comment", icon: <MessageOutlined />, label: "评论管理" },
  ];

  const LangItems = [
    { key: "中文", label: "中文" },
    { key: "English", label: "English" },
  ];

  // 顶部用户下拉菜单
  const userMenu = [
    { key: "logout", icon: <LogoutOutlined />, label: "退出登录" },
  ];

  // 菜单点击跳转
  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  // 退出登录
  const handleUserMenuClick = (e) => {
    if (e.key === "logout") {
      navigate("/login");
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh", width: "240px" }}
        theme="light"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "16px",
            color: "#fff",
          }}
        >
          <Title level={4} style={{ color: "#3f3f3f", margin: "auto" }}>
            {collapsed ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setCollapsed(false)}
                style={{ cursor: "pointer" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6H20V8H12V6ZM4 16H12V18H4V16ZM20 11H4V13H20V11Z"
                  fill="#202224"
                />
                <path
                  d="M20 6H20.25V5.75H20V6ZM12 6V5.75H11.75V6H12ZM20 8V8.25H20.25V8H20ZM12 8H11.75V8.25H12V8ZM12 16H12.25V15.75H12V16ZM4 16V15.75H3.75V16H4ZM12 18V18.25H12.25V18H12ZM4 18H3.75V18.25H4V18ZM4 11V10.75H3.75V11H4ZM20 11H20.25V10.75H20V11ZM4 13H3.75V13.25H4V13ZM20 13V13.25H20.25V13H20ZM20 5.75H12V6.25H20V5.75ZM20.25 8V6H19.75V8H20.25ZM12 8.25H20V7.75H12V8.25ZM11.75 6V8H12.25V6H11.75ZM12 15.75H4V16.25H12V15.75ZM12.25 18V16H11.75V18H12.25ZM4 18.25H12V17.75H4V18.25ZM3.75 16V18H4.25V16H3.75ZM4 11.25H20V10.75H4V11.25ZM4.25 13V11H3.75V13H4.25ZM20 12.75H4V13.25H20V12.75ZM19.75 11V13H20.25V11H19.75Z"
                  fill="white"
                />
              </svg>
            ) : (
              <>
                <span style={{ color: "#4880FF", fontWeight: "bold" }}>
                  Bright
                </span>
                <span style={{ color: "#202224", fontWeight: "bold" }}>
                  Moon
                </span>
              </>
            )}
          </Title>
        </div>
        <Menu
          theme="light"
          mode="inline"
          styles={{
            dc: {
              background: "#000",
              color: "fff",
            },
          }}
          className={styles.customMenu}
          selectedKeys={[location.pathname]}
          style={{
            padding: "0px",
            border: "0px",
            margin: "0px",
          }}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 24px",
            background: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            height: 70,
            lineHeight: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "25px",
            }}
          >
            <div>
              {collapsed ? (
                <MenuUnfoldOutlined style={{ visibility: "hidden" }} />
              ) : (
                <MenuFoldOutlined onClick={() => setCollapsed(true)} />
              )}
            </div>

            {/* 搜索框 */}
            <div className={styles.search}>
              <div className={styles.placeholder}></div>
              <input
                type="text"
                className={styles.search__input}
                placeholder="Search..."
              />
              <button className={styles.search__button}>
                <svg
                  className={styles.search__icon}
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "25px",
            }}
          >
            {/* 通知 */}
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z"
                fill="#4880FF"
              />
              <rect
                opacity="0.3"
                x="9"
                y="19.5"
                width="6"
                height="6"
                rx="2.25"
                fill="#FF0000"
              />
            </svg>

            {/* 国际化,选择下拉框 */}
            <Dropdown
              menu={{
                items: LangItems,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
            >
              <Typography.Link>
                <Space>
                  中文
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <Avatar
                style={{ height: "44px", width: "44px" }}
                src={myAvatar}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  height: "70px",
                  lineHeight: "16px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#404040",
                  }}
                >
                  用户名
                </span>
                <span style={{ color: "#565656" }}>身份</span>
              </div>
            </div>
            <Dropdown menu={{ items: userMenu, onClick: handleUserMenuClick }}>
              <DownCircleOutlined width="1px" />
            </Dropdown>
          </div>
        </Header>

        <Content
          style={{
            height: "calc(100vh - 70px)",
            overflow: "auto",
            padding: "25px",
            background: "#f5f6fa",
            boxSizing: "border-box",
            border: "1px solid #e5e5e5",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
