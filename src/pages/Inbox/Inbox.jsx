import { Typography } from "antd";
const { Title } = Typography;

const Inbox = () => {
  return (
    <div>
      <Title level={3}>收件箱</Title>
      {/* 左右布局，左边放Email */}
      <main></main>
      {/* 右边是邮箱 */}
    </div>
  );
};
export default Inbox;
