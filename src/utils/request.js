import axios from 'axios';
import { message } from 'antd';



const service = axios.create({
    baseURL: 'http://localhost:8888/',
    timeout: 5000,
    headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        "X-Requested-With": "XMLHttpRequest",
    }
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('admin-token');
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`; //携带Token到请求头
        }
        return config;
    },
    (error)=> {
        console.error('请求拦截器错误:',error);
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const res = response.data;
        // const requestUrl = response.config.url;
        
        const { code,message:msg } = res;
        switch(code + ""){
            case "100" :
                message(msg);
                break;

            default:
                break;
        }
        return res;
    },
    (error) => {
        let errorStatus,errorData;
        let errorMsg = "请求失败,请稍后再试";
        
        
        if(error.response){
            ({status: errorStatus,data:errorData} = error.response);
            errorMsg = errorData?.message || `请求失败（状态码：${errorStatus}）`;
            
            switch(errorStatus + ""){
                case "401":
                    console.log("清除登录中...");
                    localStorage.removeItem('admin-token');
                    errorMsg = errorData.msg || "登录过期，请重新登录";                  // 清除用户信息并回到登录界面
                    break;
                
                case "403":
                    errorMsg = errorData.msg || "权限不足，无法操作";
                    break;
                
                case "404":
                    errorMsg = "请求的接口不存在";
                    break;

                case "408":
                    errorMsg = errorData.msg || "请求超时，请重试";
                    break;

                case "429":
                    errorMsg = errorData.msg || "请求过于频繁，请稍后再试";
                    break;

                case "500":
                    errorMsg = errorData.msg || "服务器内部错误，请稍后再试";
                    break;
                
                default:
                    message.error(errorMsg);
                    break;
            }
        }else if(error.request){
            errorMsg = "网络异常，服务器未响应";
            console.error("请求信息: ",error.request);
        }else{
            errorMsg = `请求失败：${error.msg}`;
            console.error("请求配置错误：", error.msg);
        }
        return Promise.reject(errorMsg); // 始终返回reject，供上层业务处理
    }
);

export default service;
