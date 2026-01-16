import { useState } from 'react';
import { Form, Input, Button, Card, Layout, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/user';
import { message } from 'antd';
const { Title } = Typography;
const { Content } = Layout;


const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 登录提交
  const onFinish = async (values) => {
    try{
        setLoading(true);
        // 调用登录接口
        const res = await loginApi(values);
        console.log('登录成功：',res);
        localStorage.setItem('admin-token',res.result.token);
        navigate('/dashboard');
    }catch(error){
        console.error('登录失败:',error);
        message.error(error.response?.data?.message || "登录失败，请检查账号密码");
    }finally{
        setLoading(false);
    };
  };

  return (
    <Layout style={{ height: '100vh', background: '#5f5f5f' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card title={<Title level={3} style={{ textAlign: 'center' }}>后台管理系统登录</Title>} style={{ width: 400 }}>
          <Form
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名！' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="用户名" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码！' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="密码" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default Login;