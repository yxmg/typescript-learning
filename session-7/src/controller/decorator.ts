/**
 *Created by 夜雪暮歌 on 2021/3/26
 **/
// 遍历获取path
export function controller(constructor: any) {
    for (let key in constructor.prototype) {
        console.log(Reflect.getMetadata('path', constructor.prototype, key), "Reflect.getMetadata('path', constructor.prototype)")
    }
}

// 注入path
export function get(path: string) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('path', path, target, key)
    }
}
