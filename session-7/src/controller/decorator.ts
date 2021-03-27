/**
 *Created by 夜雪暮歌 on 2021/3/26
 **/
import {Router, RequestHandler} from 'express'

enum Method {
    get = 'get',
    post = 'post',
    delete = 'delete',
    put = 'put'
}

export const router = Router()

// 遍历收集并注册
export function controller(constructor: any) {
    for (let key in constructor.prototype) {
        const path = Reflect.getMetadata('path', constructor.prototype, key)
        const method: Method = Reflect.getMetadata('method', constructor.prototype, key)
        const middleware = Reflect.getMetadata('middleware', constructor.prototype, key)
        const handler = constructor.prototype[key]

        if (path && handler) {
            middleware ? router[method](path, middleware, handler) : router[method](path, handler)
        }
    }
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

// 注册中间件
export function use(middleware: RequestHandler) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('middleware', middleware, target, key)
    }
}

export const get = getRequestByType(Method.get)
export const post = getRequestByType(Method.post)
export const put = getRequestByType(Method.put)
export const del = getRequestByType(Method.delete)
