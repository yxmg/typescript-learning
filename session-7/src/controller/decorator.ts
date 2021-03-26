/**
 *Created by 夜雪暮歌 on 2021/3/26
 **/
import {Router} from 'express'

export const router = Router()

// 遍历获取path
export function controller(constructor: any) {
    for (let key in constructor.prototype) {
        const path = Reflect.getMetadata('path', constructor.prototype, key)
        const handler = constructor.prototype[key]
        if (path && handler) {
            router.get(path, handler)
        }
    }
}

// 注入path
export function get(path: string) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('path', path, target, key)
    }
}
