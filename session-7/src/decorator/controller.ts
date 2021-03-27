/**
 *Created by 夜雪暮歌 on 2021/3/27
 **/
import router from "../router";
import {Method} from './request'

// 遍历收集并注册
export function controller(constructor: any) {
    for (let key in constructor.prototype) {
        const path = Reflect.getMetadata('path', constructor.prototype, key)
        const method: Method = Reflect.getMetadata('method', constructor.prototype, key)
        const middleware = Reflect.getMetadata('middleware', constructor.prototype, key)
        const handler = constructor.prototype[key]

        if (path && method) {
            middleware ? router[method](path, middleware, handler) : router[method](path, handler)
        }
    }
}
