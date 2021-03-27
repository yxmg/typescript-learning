"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
// 注册中间件
function use(middleware) {
    return function (target, key) {
        Reflect.defineMetadata('middleware', middleware, target, key);
    };
}
exports.use = use;
