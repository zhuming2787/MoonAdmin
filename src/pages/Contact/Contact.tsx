import { Button, List, Avatar } from "antd";
import { MessageOutlined } from "@ant-design/icons"; // 导入Message图标
import Title from "antd/es/typography/Title";
import styles from "./Contact.module.css"; // 后续会创建这个样式文件

const mockData = [
  {
    src: "https://picsum.photos/id/1012/300/200", // 替换为真实头像图
    name: "Jason Price",
    email: "kuhlman.jermey@yahoo.com",
  },
  {
    src: "https://picsum.photos/id/1025/300/200",
    name: "Duane Dean",
    email: "rusty.botsford@wilfrid.io",
  },
  {
    src: "https://picsum.photos/id/1074/300/200",
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
  },
  {
    src: "https://picsum.photos/id/1027/300/200",
    name: "Rosie Glover",
    email: "lockman.marques@hotmail.com",
  },
  {
    src: "https://picsum.photos/id/1075/300/200",
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
  },
  {
    src: "https://picsum.photos/id/1083/300/200",
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
  },
];

const Contact = () => {
  return (
    <div className={styles.container}>
      {/* 1. Header 区域 */}
      <div className={styles.header}>
        <Title level={3}>Contact</Title>
        <Button type="primary">Add New Contact</Button>
      </div>

      {/* 2. 卡片网格容器（下一步填充内容） */}
      <div className={styles.cardGrid}>
        {mockData.map((contact, index) => (
          <div key={index} className={styles.contactCard}>
            {/* 头像 */}
            <Avatar
              src={contact.src}
              className={styles.avatar}
              shape="square"
            />
            {/* 姓名和邮箱 */}
            <div className={styles.contactInfo}>
              <div className={styles.contactName}>{contact.name}</div>
              <div className={styles.contactEmail}>{contact.email}</div>
            </div>

            {/* 按钮 */}
            <Button icon={<MessageOutlined />} className={styles.messageButton}>
              Message
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
