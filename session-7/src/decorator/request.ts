/**
 *Created by 夜雪暮歌 on 2021/3/27
 **/
export enum Method {
    get = 'get',
    post = 'post',
    delete = 'delete',
    put = 'put'
}

// 生成不同method的request
function getRequestByType(method: Method) {
    return function (path: string) {
        return function (target: any, key: string) {
            Reflect.defineMetadata('path', path, target, key)
            Reflect.defineMetadata('method', method, target, key)
        }
    }
}

export const get = getRequestByType(Method.get)
export const post = getRequestByType(Method.post)
export const put = getRequestByType(Method.put)
export const del = getRequestByType(Method.delete)
