import request from '../utils/request';

// 获取文章列表
export const getArticleList = (params) => {
  return request.get('/article/list', { params });
};

// 新增文章
export const addArticle = (data) => {
  return request.post('/article/add', data);
};

// 编辑文章
export const editArticle = (data) => {
  return request.put('/article/edit', data);
};

// 删除文章
export const deleteArticle = (id) => {
  return request.delete(`/article/delete/${id}`);
};

// 获取文章标签关联
export const getArticleTag = (articleId) => {
  return request.get(`/article/tagsId/${articleId}`);
};