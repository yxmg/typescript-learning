"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.post = exports.get = exports.Method = void 0;
/**
 *Created by 夜雪暮歌 on 2021/3/27
 **/
var Method;
(function (Method) {
    Method["get"] = "get";
    Method["post"] = "post";
    Method["delete"] = "delete";
    Method["put"] = "put";
})(Method = exports.Method || (exports.Method = {}));
// 生成不同method的request
function getRequestByType(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = getRequestByType(Method.get);
exports.post = getRequestByType(Method.post);
exports.put = getRequestByType(Method.put);
exports.del = getRequestByType(Method.delete);
