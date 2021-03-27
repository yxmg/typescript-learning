"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
/**
 *Created by 夜雪暮歌 on 2021/3/27
 **/
var router_1 = __importDefault(require("../router"));
// 遍历收集并注册
function controller(root) {
    if (root === void 0) { root = '/'; }
    return function (constructor) {
        for (var key in constructor.prototype) {
            var path = Reflect.getMetadata('path', constructor.prototype, key);
            var method = Reflect.getMetadata('method', constructor.prototype, key);
            var middlewares = Reflect.getMetadata('middlewares', constructor.prototype, key);
            var handler = constructor.prototype[key];
            if (path && method) {
                var fullPath = root === '/' ? path : "" + root + path;
                if (middlewares && middlewares.length) {
                    router_1.default[method].apply(router_1.default, __spreadArray(__spreadArray([fullPath], middlewares), [handler]));
                }
                else {
                    router_1.default[method](fullPath, handler);
                }
            }
        }
    };
}
exports.controller = controller;
