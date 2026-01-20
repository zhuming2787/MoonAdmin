import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Layout from "../pages/Layout/Layout.jsx";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import User from "../pages/User";
import Category from "../pages/Category";
import Article from "../pages/Article";
import Tag from "../pages/Tag";
import Comment from "../pages/Comment";
import Rigister from "../pages/Login/Register";
import Products from "@/pages/Products/Products";
import Favorites from "@/pages/Favorites/Favorites";
import Inbox from "@/pages/Inbox/Inbox";
import OrderList from "@/pages/OrderList/OrderList";
import ProductStock from "@/pages/ProductStock/ProductStock";
import Pricing from "@/pages/Pricing/Pricing";
import Calender from "@/pages/Calender/Calender";
import ToDo from "@/pages/ToDo/ToDo";
import Contact from "@/pages/Contact/Contact";
import Invoice from "@/pages/Invoice/Invoice";
import Elements from "@/pages/Elements/Elements";
import Team from "@/pages/Team/Team";
import Table from "@/pages/Table/Table";
import Setting from "@/pages/Setting/Setting";
// 模拟登录状态
const isLogin = true;

// 路由守卫：未登录的跳转登录页
const PrivateRoute = ({ children }) => {
  return isLogin ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Rigister /> },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "user", element: <User /> },
      { path: "category", element: <Category /> },
      { path: "tag", element: <Tag /> },
      { path: "article", element: <Article /> },
      { path: "comment", element: <Comment /> },
      { path: "products", element: <Products /> },
      { path: "favorites", element: <Favorites /> },
      { path: "Inbox", element: <Inbox /> },
      { path: "orderlist", element: <OrderList /> },
      { path: "productstock", element: <ProductStock /> },
      { path: "pricing", element: <Pricing /> },
      { path: "calender", element: <Calender /> },
      { path: "todo", element: <ToDo /> },
      { path: "contact", element: <Contact /> },
      { path: "Invoice", element: <Invoice /> },
      { path: "uielement", element: <Elements /> },
      { path: "team", element: <Team /> },
      { path: "table", element: <Table /> },
      { path: "setting", element: <Setting /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
