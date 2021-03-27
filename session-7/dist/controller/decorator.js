"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.post = exports.get = exports.use = exports.controller = exports.router = void 0;
/**
 *Created by 夜雪暮歌 on 2021/3/26
 **/
var express_1 = require("express");
var Method;
(function (Method) {
    Method["get"] = "get";
    Method["post"] = "post";
    Method["delete"] = "delete";
    Method["put"] = "put";
})(Method || (Method = {}));
exports.router = express_1.Router();
// 遍历收集并注册
function controller(constructor) {
    for (var key in constructor.prototype) {
        var path = Reflect.getMetadata('path', constructor.prototype, key);
        var method = Reflect.getMetadata('method', constructor.prototype, key);
        var middleware = Reflect.getMetadata('middleware', constructor.prototype, key);
        var handler = constructor.prototype[key];
        if (path && handler) {
            middleware ? exports.router[method](path, middleware, handler) : exports.router[method](path, handler);
        }
    }
}
exports.controller = controller;
// 生成不同method的request
function getRequestByType(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
// 注册中间件
function use(middleware) {
    return function (target, key) {
        Reflect.defineMetadata('middleware', middleware, target, key);
    };
}
exports.use = use;
exports.get = getRequestByType(Method.get);
exports.post = getRequestByType(Method.post);
exports.put = getRequestByType(Method.put);
exports.del = getRequestByType(Method.delete);
