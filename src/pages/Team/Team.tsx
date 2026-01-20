import { Avatar, Button, Card } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./Team.module.css";
import { css } from "@emotion/react";
import Avatar1 from "@/assets/images/Avatar1.jpg";
const { Meta } = Card;
const Main = css`
  display: flex;
  justify-content: center;
`;

const MyCard = css`
  width: 262px;
  height: 289px;
`;

const Team = () => {
  return (
    <div>
      <header className={styles.head}>
        <Title level={3}>团队</Title>
        <Button type="primary">Add New Member</Button>
      </header>

      <main css={Main}>
        <Card
          css={MyCard}
          title="项目作者"
          style={{ width: 320, height: "auto" }}
          cover={
            <img
              style={{ padding: "16px 20px", borderRadius: "32px" }}
              draggable={false}
              alt="example"
              src={Avatar1}
            />
          }
          extra={
            <Button type="link" styles={{ root: { color: "#A7AAE1" } }}>
              More
            </Button>
          }
        >
          <Meta title="Pigming" description="爱好编程，Minecraft，算法" />
        </Card>
      </main>
    </div>
  );
};

export default Team;
