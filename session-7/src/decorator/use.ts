/**
 *Created by 夜雪暮歌 on 2021/3/27
 **/
import {RequestHandler} from "express";

// 注册中间件
export function use(middleware: RequestHandler) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('middleware', middleware, target, key)
    }
}
