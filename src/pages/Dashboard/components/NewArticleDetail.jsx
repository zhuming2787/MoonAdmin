import React, { useState, useRef } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Space,
  Typography,
  Card,
  message,
} from "antd";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const { TextArea } = Input;

const ArticleList = () => {
  const [articleData, setArticleData] = useState([
    {
      id: 1,
      title: "React + Vite 实战教程",
      content:
        "本文讲解了React结合Vite搭建项目的核心步骤，包括环境配置、插件使用、热更新优化等内容，适合前端新手入门。",
      createTime: "2026-01-10",
      author: "前端开发",
    },
    {
      id: 2,
      title: "CSS-in-JS 最佳实践",
      content:
        "styled-components和emotion的使用对比，包含样式作用域、动态样式、性能优化等核心知识点，适配React组件化开发。",
      createTime: "2026-01-12",
      author: "样式优化",
    },
    {
      id: 3,
      title: "CSS-in-JS 最佳实践",
      content:
        "styled-components和emotion的使用对比，包含样式作用域、动态样式、性能优化等核心知识点，适配React组件化开发。",
      createTime: "2026-01-12",
      author: "样式优化",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const formRef = useRef(null);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
      align: "center",
    },
    {
      title: "文章标题",
      dataIndex: "title",
      key: "title",
      ellipsis: true, // 标题过长省略
      width: 280,
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
      width: 120,
      align: "center",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
      width: 150,
      align: "center",
    },
    {
      title: "文章简介",
      dataIndex: "content",
      key: "content",
      ellipsis: {
        rows: 2, // 内容最多显示2行，超出省略
        expandable: true, // 点击可展开查看完整内容
        symbol: "查看更多",
      },
    },
  ];

  const handleAddArticle = () => {
    setModalVisible(true);
    // 重置表单（避免上次输入残留）
    formRef.current?.resetFields();
  };

  const handleFormSubmit = () => {
    formRef.current
      ?.validateFields()
      .then((values) => {
        const newArticle = {
          id: articleData.length + 1,
          title: values.title,
          content: values.content,
          author: values.author,
          createTime: dayjs(values.createTime).format("YYYY-MM-DD"),
        };

        // 更新列表（实际项目中先调用新增接口，成功后再更新）
        setArticleData([...articleData, newArticle]);
        // 关闭弹窗
        setModalVisible(false);
        // 成功提示
        message.success("文章新增成功！");
      })
      .catch((error) => {
        console.error("表单验证失败：", error);
        message.error("请完善表单信息后提交！");
      });
  };

  return (
    <Card
      title="近期新增文章"
      bordered={false}
      // 保持你之前要求的圆角样式，适配视觉规范
      style={{
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)", // 轻微阴影提升质感
      }}
    >
      <Table
        columns={columns}
        dataSource={articleData}
        rowKey="id" // 行唯一标识（必须）
        pagination={{
          pageSize: 5, // 每页显示5条
          showSizeChanger: true, // 支持切换每页条数
          showTotal: (total) => `共 ${total} 篇文章`, // 显示总数
        }}
        // 表格内边距，适配 Card 视觉
        style={{ marginTop: 8 }}
        bordered={false} // 去掉表格边框，和 Card 融合更自然
      />
    </Card>
  );
};

export default ArticleList;
