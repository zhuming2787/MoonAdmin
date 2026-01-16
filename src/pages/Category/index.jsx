import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, message, Spin, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getCategoryList, addCategory, editCategory, deleteCategory } from '../../api/categoryApi';

const Category = () => {
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState('');


  const [pagination,setPagination] = useState({
    current:1,
    pageSize:10,
    total:0
  });

  // 获取分类列表
  const fetchCategoryList = async (pageNum,pageSize) => {
    try {      
      setLoading(true);
      const res = await getCategoryList({
        pageNum,
        pageSize
      });

      setCategoryList(res.result.list);
      setPagination({
        ...pagination,
        current:pageNum,
        pageSize,
        total: res.result.total,
      });
      
    } catch (error) {
      console.error('获取分类列表失败：', error);
      message.error('获取分类列表失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  // 新增分类
  const handleAdd = () => {
    setIsEdit(false);
    form.resetFields();
    setVisible(true);
  };

  // 编辑分类
  const handleEdit = (record) => {
    setIsEdit(true);
    setCurrentId(record.id);
    form.setFieldsValue({
      name: record.name,
      description: record.description,
      sort: record.sort,
    });
    setVisible(true);
  };

  // 删除分类
  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      message.success('删除分类成功');
      fetchCategoryList();
    } catch (error) {
      console.error('删除分类失败：', error);
    }
  };

  // 提交表单
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (isEdit) {
        await editCategory({ id: currentId, ...values });
        message.success('编辑分类成功');
      } else {
        await addCategory(values);
        message.success('新增分类成功');
      }
      setVisible(false);
      fetchCategoryList();
    } catch (error) {
      console.error('提交表单失败：', error);
      message.error('提交表单失败');
    }
  };

  // 表格列配置
  const columns = [
    { title: '分类ID', dataIndex: 'id', key: 'id' },
    { title: '分类名称', dataIndex: 'name', key: 'name' },
    { title: '分类描述', dataIndex: 'description', key: 'description', ellipsis: true },
    { title: '排序', dataIndex: 'sort', key: 'sort' },
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
        新增分类
      </Button>

      {loading ? (
        <Spin size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }} />
      ) : (
        <Table 
          columns={columns} 
          dataSource={categoryList} 
          rowKey="id" 
          pagination={{
            ...pagination,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal:(total) => `共${total}条数据`,
            onChange: (current,pageSize) => {     
              fetchCategoryList(current,pageSize);
            }
          }}
          />
      )}

      {/* 新增/编辑弹窗 */}
      <Modal
        title={isEdit ? '编辑分类' : '新增分类'}
        open={visible}
        onOk={handleSubmit}
        onCancel={() => setVisible(false)}
        destroyOnClose
      >
        <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item
            name="name"
            label="分类名称"
            rules={[{ required: true, message: '请输入分类名称' }]}
          >
            <Input placeholder="请输入分类名称" />
          </Form.Item>
          <Form.Item
            name="description"
            label="分类描述"
            rules={[{ required: false }]}
          >
            <Input.TextArea rows={3} placeholder="请输入分类描述" />
          </Form.Item>
          <Form.Item
            name="sort"
            label="排序"
            rules={[{ required: true, message: '请输入排序值' }]}
            initialValue={0}
          >
            <InputNumber min={0} placeholder="数字越小越靠前" style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Category;