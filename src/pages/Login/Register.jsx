import { useState } from "react";
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
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import { registerApi } from "../../api/user"; // 替换为你的注册接口
import SvgBackground from "@/components/SvgBackground/SvgBackground";
// 复用登录页面的 CSS Modules
import styles from "./Login.module.css";

const { Title, Text } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // 注册提交逻辑
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      // 调用注册接口
      //   const res = await registerApi(values);
      console.log("注册成功：", res);
      message.success("注册成功！请登录");
      navigate("/login"); // 注册成功后跳转到登录页
    } catch (error) {
      console.error("注册失败:", error);
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "注册失败，请检查信息或网络";
      message.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // 跳转登录页
  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <Layout className={styles.loginLayout}>
      <SvgBackground className={styles.loginSvgBg}>
        <Card className={styles.loginCard} bordered={false}>
          <div className={styles.loginCardContent}>
            {/* 标题区域（复用登录的标题样式，仅修改文本） */}
            <div className={styles.loginCardTitle}>
              <Title level={2} className={styles.loginCardMainTitle}>
                Create an Account
              </Title>
              <Text className={styles.loginCardSubTitle}>
                Create a account to continue
              </Text>
            </div>

            {/* 注册表单（复用登录的表单布局，调整字段） */}
            <Form
              form={form}
              name="register"
              onFinish={handleSubmit}
              layout="vertical"
              initialValues={{ acceptTerms: false }}
            >
              {/* 邮箱输入框（复用 loginInput 样式，新增邮箱图标） */}
              <Form.Item
                name="email"
                label="Email address:"
                rules={[
                  { required: true, message: "请输入邮箱地址" },
                  { type: "email", message: "请输入有效的邮箱地址" },
                ]}
              >
                <Input
                  className={styles.loginInput}
                  placeholder="请输入邮箱地址"
                  prefix={<MailOutlined className={styles.loginInputIcon} />}
                  defaultValue="esteban_schiller@gmail.com" // 示例默认值
                />
              </Form.Item>

              {/* 用户名输入框（复用 loginInput 样式，新增用户图标） */}
              <Form.Item
                name="username"
                label="Username"
                rules={[
                  { required: true, message: "请输入用户名" },
                  { min: 3, message: "用户名长度不能少于3位" },
                ]}
              >
                <Input
                  className={styles.loginInput}
                  placeholder="Username"
                  prefix={<UserOutlined className={styles.loginInputIcon} />}
                />
              </Form.Item>

              {/* 密码区域（复用登录的密码布局，保留“Forget Password?”链接） */}
              <div className={styles.loginPasswordHeader}>
                <Form.Item
                  name="password"
                  label="Password"
                  noStyle
                  rules={[
                    { required: true, message: "请输入密码" },
                    { min: 6, message: "密码长度不能少于6位" },
                  ]}
                >
                  <span className={styles.loginPasswordLabel}>Password</span>
                </Form.Item>
                <a
                  href="/forget-password"
                  className={styles.loginLink}
                  onClick={(e) => e.preventDefault()}
                >
                  Forget Password?
                </a>
              </div>

              {/* 密码输入框（复用 loginInput + loginPasswordInput 样式） */}
              <Form.Item name="password" noStyle>
                <Input.Password
                  className={`${styles.loginInput} ${styles.loginPasswordInput}`}
                  placeholder="请输入密码"
                  prefix={<LockOutlined className={styles.loginInputIcon} />}
                  defaultValue="******" // 示例默认值
                />
              </Form.Item>

              {/* 同意条款复选框（复用 loginRemember 样式，修改文本） */}
              <Form.Item
                name="acceptTerms"
                valuePropName="checked"
                className={styles.loginRemember}
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("请同意条款和条件")),
                  },
                ]}
              >
                <Checkbox>I accept terms and conditions</Checkbox>
              </Form.Item>

              {/* 注册按钮（复用 loginBtn 样式，修改文本） */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className={styles.loginBtn}
                  loading={loading}
                  icon={loading ? <LoadingOutlined /> : null}
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>

            {/* 底部登录链接（复用 loginRegister 样式，修改文本） */}
            <div className={styles.loginRegister}>
              <Text>
                Already have an account?{" "}
                <a
                  href="/login"
                  className={`${styles.loginLink} ${styles.loginLinkUnderline}`}
                  onClick={handleLoginClick}
                >
                  Login
                </a>
              </Text>
            </div>
          </div>
        </Card>
      </SvgBackground>
    </Layout>
  );
};

export default Register;
