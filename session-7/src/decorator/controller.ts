/**
 *Created by 夜雪暮歌 on 2021/3/27
 **/
import router from "../router";
import {Method} from './request'

// 遍历收集并注册
export function controller(root: string = '/') {
    return function (constructor: new (...args: any[]) => any) {
        for (let key in constructor.prototype) {
            const path = Reflect.getMetadata('path', constructor.prototype, key)
            const method: Method = Reflect.getMetadata('method', constructor.prototype, key)
            const middlewares = Reflect.getMetadata('middlewares', constructor.prototype, key)
            const handler = constructor.prototype[key]

            if (path && method) {
                const fullPath = root === '/' ? path : `${root}${path}`
                if (middlewares && middlewares.length) {
                    router[method](fullPath, ...middlewares, handler)
                } else {
                    router[method](fullPath, handler)
                }
            }
        }
    }
}
