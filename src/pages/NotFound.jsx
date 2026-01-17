import { Layout, Card, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import SvgBackground from "@/components/SvgBackground/SvgBackground";
// 复用登录页的 CSS Modules
import styles from "./Login/Login.module.css";

const { Title, Text } = Typography;

import notfound from "@/assets/images/notfound.png";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <Layout className={styles.loginLayout}>
      <SvgBackground className={styles.loginSvgBg}>
        <Card className={styles.loginCard} bordered={false}>
          <div className={styles.loginCardContent}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <img
                src={notfound}
                alt="404 Not Found"
                style={{ width: "320px", height: "auto" }}
              />
            </div>

            <div className={styles.loginCardTitle}>
              <Title level={2} className={styles.loginCardMainTitle}>
                Looks like you've got lost....
              </Title>
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Button
                type="primary"
                block
                className={styles.loginBtn}
                onClick={handleBackToDashboard}
              >
                Back to Dashboard
              </Button>
            </div>
          </div>
        </Card>
      </SvgBackground>
    </Layout>
  );
};

export default NotFound;
