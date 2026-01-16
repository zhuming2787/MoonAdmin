import request from '../utils/request';

// 获取标签列表
export const getTagList = (params) => {
  return request.get('/tag/list', { params });
};

// 获取标签全部列表
export const getTagAllList = (params) => {
  return request.get('/tag/listall',{ params });
};

// 新增标签
export const addTag = (data) => {
  return request.post('/tag/add', data);
};

// 编辑标签
export const editTag = (data) => {
  return request.put('/tag/edit', data);
};

// 删除标签
export const deleteTag = (id) => {
  return request.delete(`/tag/delete/${id}`);
};