"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.controller = exports.router = void 0;
/**
 *Created by 夜雪暮歌 on 2021/3/26
 **/
var express_1 = require("express");
exports.router = express_1.Router();
// 遍历获取path
function controller(constructor) {
    for (var key in constructor.prototype) {
        var path = Reflect.getMetadata('path', constructor.prototype, key);
        var handler = constructor.prototype[key];
        if (path && handler) {
            exports.router.get(path, handler);
        }
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
