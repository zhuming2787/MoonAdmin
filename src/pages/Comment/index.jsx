import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Select, message, Spin, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getCommentList, editCommentStatus, deleteComment } from '../../api/commentApi';

const { Option } = Select;
const { Text } = Typography;
const Comment = () => {
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentId, setCurrentId] = useState('');


  const [pagination,setPagination] = useState({
    current:1,
    pageSize:10,
    total:0
  });
  // 获取评论列表
  const fetchCommentList = async (pageNum,pageSize) => {
    try {
      setLoading(true);
      const res = await getCommentList({
        pageNum,
        pageSize
      });

      setCommentList(res.result.list);
      console.log("测试：",res);
      
      setPagination({
        ...pagination,
        current:pageNum,
        pageSize,
        total: res.result.total,
      });

    } catch (error) {
      console.error('获取评论列表失败：', error);
      message.error('获取评论列表失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommentList();
  }, []);

  // 编辑评论状态
  const handleEdit = (record) => {
    setCurrentId(record.id);
    form.setFieldsValue({ status: record.status + '' });
    setVisible(true);
  };

  // 删除评论
  const handleDelete = async (id) => {
    try {
      await deleteComment(id);
      message.success('删除评论成功');
      fetchCommentList();
    } catch (error) {
      console.error('删除评论失败：', error);
      message.error('删除评论失败');
    }
  };

  // 提交状态修改
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await editCommentStatus({ id: currentId, status: Number(values.status) });
      message.success('修改评论状态成功');
      setVisible(false);
      fetchCommentList();
    } catch (error) {
      console.error('提交失败：', error);
      message.error('修改评论状态失败');
    }
  };

  // 表格列配置
  const columns = [
    { title: '评论ID', dataIndex: 'id', key: 'id' },
    { title: '文章标题', dataIndex: 'article_title', key: 'article_title', ellipsis: true },
    { title: '评论者', dataIndex: 'nickname', key: 'nickname' },
    {
      title: '评论内容',
      dataIndex: 'content',
      key: 'content',
      render: (content) => <Text ellipsis style={{ width: 300 }}>{content}</Text>,
    },
    {
      title: '父评论ID',
      dataIndex: 'parent_id',
      key: 'parent_id',
      render: (parent_id) => (parent_id === 0 ? '一级评论' : parent_id),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let text = '';
        let color = '';
        if (status === 1) {
          text = '审核通过';
          color = 'green';
        } else if (status === 0) {
          text = '待审核';
          color = 'orange';
        } else {
          text = '已删除';
          color = 'red';
        }
        return <Text style={{ color }}>{text}</Text>;
      },
    },
    { title: '创建时间', dataIndex: 'created_at', key: 'created_at', ellipsis: true },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} size="small" onClick={() => handleEdit(record)}>
            改状态
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
      {loading ? (
        <Spin size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }} />
      ) : (
        <Table 
          columns={columns} 
          dataSource={commentList} 
          rowKey="id" 
          pagination={{
            ...pagination,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal:(total) => `共${total}条数据`,
            onChange: (current,pageSize) => {     
              fetchCommentList(current,pageSize);
            }
          }}
          />
      )}

      {/* 编辑状态弹窗 */}
      <Modal
        title="修改评论状态"
        open={visible}
        onOk={handleSubmit}
        onCancel={() => setVisible(false)}
        destroyOnClose
      >
        <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item
            name="status"
            label="评论状态"
            rules={[{ required: true, message: '请选择评论状态' }]}
          >
            <Select placeholder="请选择状态">
              <Option value="1">审核通过</Option>
              <Option value="0">待审核</Option>
              <Option value="2">已删除</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Comment;