import axios from '@/utils/request'

namespace Login {
    // 用户登录表单
    export interface LoginReqForm {
        account: string;
        password: string;
    }

    // 登录成功后返回的token
    export interface LoginResData {
        token: string;
    }
}
// 用户登录
export const login = (params: Login.LoginReqForm) => {
    // 返回的数据格式可以和服务端约定
    return axios.post<Login.LoginResData>('/login', params);
}

export const testRequest = () => {
    return axios.get('/home/category/head')
}