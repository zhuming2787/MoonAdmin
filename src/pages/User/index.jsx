import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Select, message, Spin, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getUserList, addUser, editUser, deleteUser } from '../../api/userApi';

const { Option } = Select;
const User = () => {
  // 状态管理
  const [visible, setVisible] = useState(false); // 新增/编辑弹窗显隐
  const [form] = Form.useForm(); // 表单实例
  const [isEdit, setIsEdit] = useState(false); // 区分新增/编辑
  const [currentId, setCurrentId] = useState(''); // 编辑时的用户ID

	const [userList,setUserList] = useState([]);
	const [loading,setLoading] = useState(false);
  const [pagination,setPagination] = useState({
    current:1,
    pageSize:10,
    total:0
  });


	// 获取用户列表
	const fetchUserList = async (pageNum,pageSize) => {
		try{
			setLoading(true);
      const currentPage = pageNum || pagination.current;
      const currentSize = pageSize || pagination.pageSize;
      
			const res = await getUserList({
        pageNum : currentPage,
        pageSize: currentSize,
      }); //获取用户列表

			setUserList(res.result.list);
      setPagination({
        ...pagination,
        current:currentPage,
        pageSize: currentSize,
        total: res.result.total,
      });
      
		}catch(err) {
			console.error('获取用户列表失败',err);
			message.error('获取用户列表失败');
		}finally{
			setLoading(false);
		}
	}


  // 组件挂载时加载列表,[]是首次渲染时执行
	useEffect(()=>{
		fetchUserList(pagination.current,pagination.pageSize);
	},[pagination.current,pagination.pageSize]);


  // 新增用户：打开弹窗，重置表单
  const handleAdd = () => {
    setIsEdit(false);
    form.resetFields();
    setVisible(true);
  };

  // 编辑用户：打开弹窗，回显数据
  const handleEdit = (record) => {
    setIsEdit(true);
    setCurrentId(record.id);
    form.setFieldsValue({
      username: record.username,
      email: record.email,
      nickname: record.nickname,
      status: record.status + '', // 转为字符串匹配Select的value
      intro: record.intro,
    });
    setVisible(true);
  };

  // 删除用户
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      message.success('删除成功');
      fetchUserList(); // 重新加载列表
    } catch (error) {
      console.error('删除用户失败', error);
      message.error(`删除用户失败: ${error}`);
    }
  };

  // 表单提交：新增/编辑
  const handleSubmit = async () => {
    try {
      console.log(form.getFieldValue());
      
      const values = await form.validateFields();
      // 转换状态为数字
      values.status = Number(values.status);
      if (isEdit) {
        // 编辑：携带ID
        await editUser({ id: currentId, ...values });
        message.success('编辑用户成功');
      } else {
        // 新增
        await addUser(values);
        message.success('新增用户成功');
      }
      setVisible(false);
      fetchUserList(); // 重新加载列表
    } catch (error) {
      console.error('提交表单失败：', error);
      message.error(`提交表单失败: ${error}`);
    }
  };

  // 表格列配置
  const columns = [
    { title: '用户ID', dataIndex: 'id', key: 'id' },
    { title: '用户名', dataIndex: 'username', key: 'username' },
    { title: '昵称', dataIndex: 'nickname', key: 'nickname' },
    { title: '邮箱', dataIndex: 'email', key: 'email' },
    { title: '个人简介', dataIndex: 'intro', key: 'intro', ellipsis: true },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span>{status === 1 ? '启用' : '禁用'}</span>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at',
      ellipsis: true,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} size="small" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Button danger icon={<DeleteOutlined />} size="small" onClick={() => handleDelete(record.id)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
      {/* 新增按钮 */}
      <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd} style={{ marginBottom: 16 }}>
        新增用户
      </Button>

      {/* 加载中 */}
      {loading ? (
        <Spin size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }} />
      ) : (
        <Table 
          columns={columns}
          dataSource={userList} 
          rowKey="id"
          pagination={{
            ...pagination,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal:(total) => `共${total}条数据`,
            onChange: (current,pageSize) => {     
              fetchUserList(current,pageSize);
            }
          }}
          />
      )}

      {/* 新增/编辑弹窗 */}
      <Modal
        title={isEdit ? '编辑用户' : '新增用户'}
        open={visible}
        onOk={handleSubmit}
        onCancel={() => setVisible(false)}
        destroyOnClose // 关闭时销毁表单
      >
        <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" disabled={isEdit} />

          </Form.Item>

        

          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: !isEdit, message: '请输入密码' }]} // 编辑时密码非必填
          >
            <Input.Password placeholder={isEdit ? '不填则保持原密码' : '请输入密码'} />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[{ required: true, message: '请输入邮箱' }, { type: 'email', message: '请输入正确的邮箱格式' }]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item
            name="nickname"
            label="昵称"
            rules={[{ required: true, message: '请输入昵称' }]}
          >
            <Input placeholder="请输入昵称" />
          </Form.Item>
          <Form.Item
            name="status"
            label="状态"
            rules={[{ required: true, message: '请选择状态' }]}
          >
            <Select placeholder="请选择状态">
              <Option value="1">启用</Option>
              <Option value="0">禁用</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="intro"
            label="简介"
            rules={[{ required: false }]}
          >
            <Input.TextArea rows={3} placeholder="请输入个人简介" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default User;