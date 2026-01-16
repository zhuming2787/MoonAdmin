import request from '../utils/request';

// 获取评论列表
export const getCommentList = (params) => {
  return request.get('/comment/list', { params });
};

// 编辑评论状态
export const editCommentStatus = (data) => {
  return request.put('/comment/edit', data);
};

// 删除评论
export const deleteComment = (id) => {
  return request.delete(`/comment/delete/${id}`);
};