import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message, Spin, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getTagList, addTag, editTag, deleteTag } from '../../api/tagApi';

const Tag = () => {
  const [loading, setLoading] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState('');


  const [pagination,setPagination] = useState({
    current:1,
    pageSize:10,
    total:0
  });

  // 获取标签列表
  const fetchTagList = async (pageNum,pageSize) => {
    try {
      setLoading(true);
      const res = await getTagList({
        pageNum,
        pageSize
      });

      setTagList(res.result.list);
      setPagination({
        ...pagination,
        current:pageNum,
        pageSize,
        total: res.result.total,
      });


    } catch (error) {
      console.error('获取标签列表失败：', error);
      message.error('获取标签列表失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTagList();
  }, []);

  const handleAdd = () => {
    setIsEdit(false);
    form.resetFields();
    setVisible(true);
  };

  const handleEdit = (record) => {
    setIsEdit(true);
    setCurrentId(record.id);
    form.setFieldsValue({ name: record.name });
    setVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTag(id);
      message.success('删除标签成功');
      fetchTagList();
    } catch (error) {
      console.error('删除标签失败：', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (isEdit) {
        await editTag({ id: currentId, ...values });
        message.success('编辑标签成功');
      } else {
        await addTag(values);
        message.success('新增标签成功');
      }
      setVisible(false);
      fetchTagList();
    } catch (error) {
      console.error('提交表单失败：', error);
      message.error('提交表单失败（标签名称已存在）');
    }
  };

  const columns = [
    { title: '标签ID', dataIndex: 'id', key: 'id' },
    { title: '标签名称', dataIndex: 'name', key: 'name' },
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
        新增标签
      </Button>

      {loading ? (
        <Spin size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }} />
      ) : (
        <Table 
          columns={columns} 
          dataSource={tagList} 
          rowKey="id" 
          pagination={{
            ...pagination,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal:(total) => `共${total}条数据`,
            onChange: (current,pageSize) => {     
              fetchTagList(current,pageSize);
            }
          }}
          />
      )}

      <Modal
        title={isEdit ? '编辑标签' : '新增标签'}
        open={visible}
        onOk={handleSubmit}
        onCancel={() => setVisible(false)}
        destroyOnClose
      >
        <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item
            name="name"
            label="标签名称"
            rules={[{ required: true, message: '请输入标签名称' }]}
          >
            <Input placeholder="请输入标签名称" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Tag;