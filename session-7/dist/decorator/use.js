"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
// 注册中间件
function use(middleware) {
    return function (target, key) {
        var middlewares = Reflect.getMetadata('middlewares', target, key) || [];
        Array.isArray(middleware) ? middlewares.push.apply(middlewares, middleware) : middlewares.push(middleware);
        Reflect.defineMetadata('middlewares', middlewares, target, key);
    };
}
exports.use = use;
