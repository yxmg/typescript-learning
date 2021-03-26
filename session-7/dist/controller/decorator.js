"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.controller = void 0;
/**
 *Created by 夜雪暮歌 on 2021/3/26
 **/
// 遍历获取path
function controller(constructor) {
    for (var key in constructor.prototype) {
        console.log(Reflect.getMetadata('path', constructor.prototype, key), "Reflect.getMetadata('path', constructor.prototype)");
    }
}
exports.controller = controller;
// 注入path
function get(path) {
    return function (target, key) {
        Reflect.defineMetadata('path', path, target, key);
    };
}
exports.get = get;
