import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Select, InputNumber, Switch, message, Spin, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import MDEditor from '@uiw/react-md-editor'; // 富文本编辑器
import { getArticleList, addArticle, editArticle, deleteArticle, getArticleTag } from '../../api/articleApi';
import { getCategoryAllList } from '../../api/categoryApi';
import { getTagAllList } from '../../api/tagApi';

const { Option } = Select;
const { TextArea } = Input;
const Article = () => {
  const [loading, setLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState('');
  // 分类和标签下拉数据
  const [categoryList, setCategoryList] = useState([]);
  const [tagList, setTagList] = useState([]);
  // 富文本内容
  const [content, setContent] = useState('');

  const [pagination,setPagination] = useState({
    current:1,
    pageSize:10,
    total:0
  });

  // 获取文章列表
  const fetchArticleList = async (pageNum,pageSize) => {
    try {
      setLoading(true);
      const res = await getArticleList({
        pageNum,
        pageSize
      });
      
      console.log(res);
      setArticleList(res.result.list);
      
      setPagination({
        ...pagination,
        current:pageNum,
        pageSize,
        total: res.result.total,
      });

      
    } catch (error) {
      console.error('获取文章列表失败：', error);
      message.error('获取文章列表失败');
    } finally {
      setLoading(false);
    }
  };

  // 获取分类和标签下拉数据
  const fetchSelectData = async () => {
    try {
      const [categoryRes, tagRes] = await Promise.all([getCategoryAllList(), getTagAllList()]);
      console.log(categoryRes);
      console.log(tagRes);
      setCategoryList(categoryRes.result.list);
      setTagList(tagRes.result.list);
    } catch (error) {
      console.error('获取下拉数据失败：', error);
      message.error('获取分类/标签数据失败');
    }
  };

  useEffect(() => {
    fetchArticleList();
    fetchSelectData();
  }, []);

  const handleAdd = () => {
    setIsEdit(false);
    form.resetFields();
    setContent('');
    setVisible(true);
  };

  const handleEdit = async (record) => {
    setIsEdit(true);
    setCurrentId(record.id);
    const res = await getArticleTag(record.id);
    form.setFieldsValue({
      title: record.title,
      summary: record.summary,
      category_id: record.category_id,
      status: record.status === 1,
      view_count: record.view_count,
      like_count: record.like_count,
      tag_ids: record.tag_ids || res.result.tag_ids, // 文章关联的标签ID数组
    });
    setContent(record.content);
    setVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      message.success('删除文章成功');
      fetchArticleList();
    } catch (error) {
      console.error('删除文章失败：', error);
      message.error('删除文章失败');
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      
      // 处理状态：Switch为布尔值，转为数字
      values.status = values.status ? 1 : 0;
      // 合并富文本内容
      const submitData = { ...values, content, user_id: 1 }; // 暂固定作者ID为1，后续从登录态获取

      console.log(submitData); 
      if (isEdit) {
        await editArticle({ id: currentId, ...submitData });
        message.success('编辑文章成功');
      } else {
        await addArticle(submitData);
        message.success('新增文章成功');
      }
      setVisible(false);
      fetchArticleList();
    } catch (error) {
      console.error('提交表单失败：', error);
      message.error('提交表单失败');
    }
  };

  // 表格列配置
  const columns = [
    { title: '文章ID', dataIndex: 'id', key: 'id' },
    { title: '文章标题', dataIndex: 'title', key: 'title', ellipsis: true },
    { title: '作者', dataIndex: 'nickname', key: 'nickname' }, // 关联用户表的昵称
    { title: '分类', dataIndex: 'category_name', key: 'category_name' }, // 关联分类表的名称
    { title: '阅读量', dataIndex: 'view_count', key: 'view_count' },
    { title: '点赞数', dataIndex: 'like_count', key: 'like_count' },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span>{status === 1 ? '发布' : status === 0 ? '草稿' : '回收站'}</span>
      ),
    },
    { title: '创建时间', dataIndex: 'created_at', key: 'created_at', ellipsis: true },
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
      <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd} style={{ marginBottom: 16 }}>
        新增文章
      </Button>

      {loading ? (
        <Spin size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }} />
      ) : (
        <Table 
          columns={columns} 
          dataSource={articleList} 
          rowKey="id" 
          pagination={{
            ...pagination,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal:(total) => `共${total}条数据`,
            onChange: (current,pageSize) => {     
              fetchArticleList(current,pageSize);
            }
          }}
          />
      )}

      <Modal
        title={isEdit ? '编辑文章' : '新增文章'}
        open={visible}
        onOk={handleSubmit}
        onCancel={() => setVisible(false)}
        width={800}
      >
        <Form form={form} labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>

          <Form.Item
            name="title"
            label="文章标题"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" />
          </Form.Item>

          <Form.Item
            name="summary"
            label="文章摘要"
            rules={[{ required: true, message: '请输入文章摘要' }]}
          >
            <TextArea rows={3} placeholder="请输入文章摘要（列表页展示）" />
          </Form.Item>

          <Form.Item
            name="category_id"
            label="所属分类"
            rules={[{ required: true, message: '请选择分类' }]}
          >
            <Select placeholder="请选择分类">
              {categoryList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {/* map返回的是新数组 */}
          <Form.Item 
            name="tag_ids"
            label="文章标签"
            rules={[{ required: true, message: '请选择标签' }]}
          >
            <Select mode="multiple" placeholder="请选择标签">
              {tagList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>


          </Form.Item>
          <Form.Item name="status" label="发布状态" valuePropName="checked" initialValue={true}>
            <Switch checkedChildren="发布" unCheckedChildren="草稿" />
          </Form.Item>
          <Form.Item name="view_count" label="阅读量" initialValue={0}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="like_count" label="点赞数" initialValue={0}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="文章内容" required>
            <MDEditor value={content} onChange={setContent} height={400} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Article;