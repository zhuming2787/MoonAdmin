import request from '../utils/request';

// ✔获取用户列表 
export const getUserList = (params) => {
    return request.get('/user/list',{params});
};

// 注册用户
export const addUser = (data) => {
    return request.post('/user/add',data);
}

// ✔编辑用户
export const editUser = (data) => {
    return request.put('/user/edit',data);
}

// ✔删除用户 By id
export const deleteUser = (id) => {
    return request.delete(`/user/delete/${id}`);
}