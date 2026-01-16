import request from '../utils/request'

export const getDashboardDate = () => {
    return request.get('/dashboard/total');
}