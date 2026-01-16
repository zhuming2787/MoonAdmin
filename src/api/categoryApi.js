import request from '../utils/request';

// ✔获取分类列表
export const getCategoryList = (params) => {
    return request.get('/category/list',{params});
}

// ✔获取全部分类列表
export const getCategoryAllList = (params) => {
    return request.get('/category/listall',{params});
}

// ✔新增分类
export const addCategory = (data) => {
    return request.post('/category/add',data);
}

// ✔编辑分类
export const editCategory = (data) => {
    return request.put('/category/edit', data);
}

// ✔删除分类
export const deleteCategory = (id) => {
  return request.delete(`/category/delete/${id}`);
};