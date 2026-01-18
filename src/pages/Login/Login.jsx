import { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Layout,
  Typography,
  message,
} from "antd";
import { UserOutlined, LockOutlined, LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/user";
import SvgBackground from "@/components/SvgBackground/SvgBackground";
import styles from "./Login.module.css";

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const rememberInfo = localStorage.getItem("login-remember");
    if (rememberInfo) {
      const { username, remember } = JSON.parse(rememberInfo);
      form.setFieldsValue({ username, remember });
    }
  }, [form]);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await loginApi(values);
      localStorage.setItem("admin-token", res.result.token);

      if (values.remember) {
        localStorage.setItem(
          "login-remember",
          JSON.stringify({
            username: values.username,
            remember: true,
          }),
        );
      } else {
        localStorage.removeItem("login-remember");
      }

      message.success("登录成功！");
      navigate("/dashboard");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "登录失败，请检查账号密码或网络";
      message.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <Layout className={styles.loginLayout}>
      <SvgBackground className={styles.loginSvgBg}>
        <Card className={styles.loginCard} bordered={false}>
          <div className={styles.loginCardContent}>
            <div className={styles.loginCardTitle}>
              <Title level={2} className={styles.loginCardMainTitle}>
                Login to Account
              </Title>
              <Text className={styles.loginCardSubTitle}>
                Please enter your email and password to continue
              </Text>
            </div>

            <Form
              form={form}
              name="login"
              onFinish={handleSubmit}
              layout="vertical"
              initialValues={{ remember: false }}
            >
              <Form.Item
                name="username"
                label="Username:"
                rules={[{ required: true, message: "请输入用户名" }]}
              >
                <Input
                  className={styles.loginInput}
                  placeholder="请输入用户名"
                  prefix={<UserOutlined className={styles.loginInputIcon} />}
                />
              </Form.Item>

              <div className={styles.loginPasswordHeader}>
                <Form.Item
                  name="password"
                  label="Password"
                  noStyle
                  rules={[{ required: true, message: "请输入密码" }]}
                >
                  <span className={styles.loginPasswordLabel}>Password</span>
                </Form.Item>
                <a
                  href="/forget-password"
                  className={styles.loginLink}
                  onClick={handleLinkClick}
                >
                  Forget Password?
                </a>
              </div>

              <Form.Item name="password" noStyle>
                <Input.Password
                  className={`${styles.loginInput} ${styles.loginPasswordInput}`}
                  placeholder="请输入密码"
                  prefix={<LockOutlined className={styles.loginInputIcon} />}
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                className={styles.loginRemember}
              >
                <Checkbox>Remember Password</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className={styles.loginBtn}
                  loading={loading}
                  icon={loading ? <LoadingOutlined /> : null}
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>

            <div className={styles.loginRegister}>
              <Text>
                Don't have an account?{" "}
                <a
                  className={`${styles.loginLink} ${styles.loginLinkUnderline}`}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Create Account
                </a>
              </Text>
            </div>
          </div>
        </Card>
      </SvgBackground>
    </Layout>
  );
};

export default Login;
