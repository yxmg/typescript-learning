"use strict";
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
function controller(constructor) {
    for (var key in constructor.prototype) {
        var path = Reflect.getMetadata('path', constructor.prototype, key);
        var method = Reflect.getMetadata('method', constructor.prototype, key);
        var middleware = Reflect.getMetadata('middleware', constructor.prototype, key);
        var handler = constructor.prototype[key];
        if (path && method) {
            middleware ? router_1.default[method](path, middleware, handler) : router_1.default[method](path, handler);
        }
    }
}
exports.controller = controller;
