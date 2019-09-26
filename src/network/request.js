import axios from 'axios'
//npm install axios --save
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8081',
        timeout: 2000
    });
    /*//请求拦截器
    instance.interceptors.request.use(config =>{
        console.log(config);
        return config;
    },error => {
        console.log(error);
    });*/
    
    /*//响应拦截
    instance.inserceptor.request.use(res =>{
        return res.data
    },err =>{
        console.log(err);
    });*/
    return instance(config)
}


