/**
 *Created by 夜雪暮歌 on 2021/3/27
 **/
import {RequestHandler} from "express";

// 注册中间件
export function use(middleware: RequestHandler | RequestHandler[]) {
    return function (target: any, key: string) {
        const middlewares = Reflect.getMetadata('middlewares', target, key) || []
        Array.isArray(middleware) ? middlewares.push(...middleware) : middlewares.push(middleware)
        Reflect.defineMetadata('middlewares', middlewares, target, key)
    }
}
